import { Utils, knownFolders } from '@nativescript/core';
import { FolderPickerOptions } from '.';
import { FilePickerOptions, SaveFileOptions } from './index.common';
export { FilePickerOptions };

@NativeClass
class DocumentPickerDelegate extends NSObject implements UIDocumentPickerDelegate {
    private _resolve: Function;
    private _reject: Function;
    private _booleanResult: boolean;
    private _resultKey: string;
    public static ObjCProtocols = [UIDocumentPickerDelegate];

    public static initWithResolveReject(resolve, reject, booleanResult = false, resultKey = 'files') {
        const delegate = DocumentPickerDelegate.new() as DocumentPickerDelegate;
        delegate._resolve = resolve;
        delegate._reject = reject;
        delegate._resultKey = resultKey;
        delegate._booleanResult = booleanResult;

        return delegate;
    }

    cleanup(controller) {
        this._resolve = null;
        this._reject = null;
        controller.delegate = null;
        delegate = null;
    }

    public documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL) {
        this._resolve(
            this._booleanResult
                ? true
                : {
                      files: [url.absoluteString.replace('file://', '')],
                      ios: url
                  }
        );
        this.cleanup(controller);
    }

    public documentPickerDidPickDocumentsAtURLs(controller: UIDocumentPickerViewController, urls: NSArray<NSURL>) {
        if (this._booleanResult) {
            this._resolve(true);
        } else {
            const output = [];
            for (let i = 0; i < urls.count; i++) {
                output.push(decodeURI(urls[i].absoluteString.replace('file://', '')));
            }
            this._resolve({
                [this._resultKey]: output,
                ios: urls
            });
        }
        this.cleanup(controller);
    }

    public documentPickerWasCancelled(controller: UIDocumentPickerViewController) {
        this._resolve(
            this._booleanResult
                ? false
                : {
                      files: []
                  }
        );
        this.cleanup(controller);
    }
}
// Reference to delegate instance to avoid delegate issue
// https://github.com/nativescript-community/ui-document-picker/issues/10
let delegate;
export function openFilePicker(params: FilePickerOptions = {}) {
    // const options = params;
    let documentTypes;

    if (params.extensions && params.extensions.length > 0) {
        documentTypes = params.extensions;
        documentTypes = params.extensions.map((e) => {
            let result = e;
            if (e.indexOf('/') !== -1) {
                result = UTType.typeWithMIMEType(e)?.identifier;
            } else if (e.indexOf('.') === -1) {
                result = UTType.typeWithFilenameExtension(e)?.identifier;
            }
            return result || e;
        });
    } else {
        documentTypes = [UTTypeContent.identifier];
    }
    if (params.documentTypes) {
        documentTypes = documentTypes || [];
        documentTypes.push(...params.documentTypes);
    }

    return new Promise((resolve, reject) => {
        const controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(
            Utils.ios.collections.jsArrayToNSArray(documentTypes),
            params.pickerMode !== undefined ? params.pickerMode : UIDocumentPickerMode.Import
        );
        delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject) as any;
        controller.delegate = delegate;

        if (params.startingFolder) {
            controller.directoryURL = NSURL.fileURLWithPath(params.startingFolder);
        }
        // if (options.multipleSelection) {
        controller.allowsMultipleSelection = !!params.multipleSelection;
        // }

        // this.presentViewController(controller);
        const app = UIApplication.sharedApplication;
        const window = app.keyWindow || (app.windows.count > 0 && app.windows[0]);
        const visibleVC = Utils.ios.getVisibleViewController(window.rootViewController);
        visibleVC.presentViewControllerAnimatedCompletion(controller, true, null);
    });
}
export async function pickFolder(params: FolderPickerOptions = {}) {
    return new Promise((resolve, reject) => {
        const controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(
            Utils.ios.collections.jsArrayToNSArray([UTTypeFolder.identifier]),
            UIDocumentPickerMode.Open
        );
        delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject, false, 'folders') as any;
        controller.delegate = delegate;

        if (params.startingFolder) {
            controller.directoryURL = NSURL.fileURLWithPath(params.startingFolder);
        }
        // if (options.multipleSelection) {
        controller.allowsMultipleSelection = !!params.multipleSelection;
        // }

        // this.presentViewController(controller);
        const app = UIApplication.sharedApplication;
        const window = app.keyWindow || (app.windows.count > 0 && app.windows[0]);
        const visibleVC = Utils.ios.getVisibleViewController(window.rootViewController);
        visibleVC.presentViewControllerAnimatedCompletion(controller, true, null);
    });
}

export async function saveFile(params: SaveFileOptions) {
    return new Promise(async (resolve, reject) => {
        const tempFile = knownFolders.temp().getFile(params.name);
        if (typeof params.data === 'string') {
            await tempFile.writeText(params.data);
        } else {
            await tempFile.write(params.data);
        }
        const controller = UIDocumentPickerViewController.alloc().initForExportingURLsAsCopy(
            [NSURL.fileURLWithPath(tempFile.path)],
            true
        );
        delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject, true) as any;
        controller.delegate = delegate;
        controller.shouldShowFileExtensions = true;

        // this.presentViewController(controller);
        const app = UIApplication.sharedApplication;
        const window = app.keyWindow || (app.windows.count > 0 && app.windows[0]);
        const visibleVC = Utils.ios.getVisibleViewController(window.rootViewController);
        visibleVC.presentViewControllerAnimatedCompletion(controller, true, null);
    });
}
