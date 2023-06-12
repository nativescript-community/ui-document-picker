import { Utils } from '@nativescript/core';
import { FolderPickerOptions } from '.';
import { FilePickerOptions } from './index.common';
export { FilePickerOptions };

@NativeClass
class DocumentPickerDelegate extends NSObject implements UIDocumentPickerDelegate {
    private _resolve: Function;
    private _reject: Function;
    public static ObjCProtocols = [UIDocumentPickerDelegate];

    public static initWithResolveReject(resolve, reject) {
        const delegate = DocumentPickerDelegate.new() as DocumentPickerDelegate;
        delegate._resolve = resolve;
        delegate._reject = reject;

        return delegate;
    }

    cleanup(controller) {
        this._resolve = null;
        this._reject = null;
        controller.delegate = null;
        delegate = null;
    }

    public documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL) {
        this._resolve({
            files: [url.absoluteString],
            ios: url
        });
        this.cleanup(controller);
    }

    public documentPickerDidPickDocumentsAtURLs(controller: UIDocumentPickerViewController, urls: NSArray<NSURL>) {
        const output = [];
        for (let i = 0; i < urls.count; i++) {
            output.push(urls[i].absoluteString);
        }
        this._resolve({
            files: output,
            ios: urls
        });
        this.cleanup(controller);
    }

    public documentPickerWasCancelled(controller: UIDocumentPickerViewController) {
        this._resolve({
            files: []
        });
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
