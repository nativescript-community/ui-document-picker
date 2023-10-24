import { Utils, knownFolders } from '@nativescript/core';
import { FolderPickerOptions } from '.';
import { FilePickerOptions, SaveFileOptions } from './index.common';
export { FilePickerOptions };

@NativeClass
class DocumentPickerDelegate extends NSObject implements UIDocumentPickerDelegate {
    private _resolve: Function;
    private _reject: Function;
    private _booleanResult: boolean;
    public static ObjCProtocols = [UIDocumentPickerDelegate];

    public static initWithResolveReject(resolve, reject, booleanResult = false) {
        const delegate = DocumentPickerDelegate.new() as DocumentPickerDelegate;
        delegate._resolve = resolve;
        delegate._reject = reject;
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
                      files: [url.absoluteString],
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
                output.push(urls[i].absoluteString);
            }
            this._resolve({
                files: output,
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
        documentTypes = Utils.ios.collections.jsArrayToNSArray(params.extensions);
    } else {
        documentTypes = Utils.ios.collections.jsArrayToNSArray([UTTypeContent.identifier]);
    }

    return new Promise((resolve, reject) => {
        const controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(
            documentTypes,
            params.pickerMode !== undefined ? params.pickerMode : UIDocumentPickerMode.Import
        );
        delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject) as any;
        controller.delegate = delegate;

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
    return {
        folders: []
    };
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
            [NSURL.URLWithString(tempFile.path)],
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
