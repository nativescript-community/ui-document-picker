import * as utils from 'tns-core-modules/utils/utils';
import { isIOS } from 'tns-core-modules/ui/core/view';
import { FilePickerOptions } from './filepicker.common';

export { FilePickerOptions };

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

    public documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL) {
        this._resolve({
            files: [url.absoluteString],
            ios: url
        });
        this._resolve = null;
        this._reject = null;
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
        this._resolve = null;
        this._reject = null;
    }

    public documentPickerWasCancelled(controller: UIDocumentPickerViewController) {
        this._reject('cancelled');
        this._resolve = null;
        this._reject = null;
    }
}

export function openFilePicker(params: FilePickerOptions) {
    console.log('openFilePicker', params, isIOS);
    // const options = params;
    // let documentTypes;

    // if (params.extensions && params.extensions.length > 0) {
    //     documentTypes = utils.ios.collections.jsArrayToNSArray(params.extensions);
    // }
    return new Promise((resolve, reject) => {
        console.log('arunning promise controller', params.extensions);
        const controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(params.extensions, UIDocumentPickerMode.Import);
        controller.delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject) as any;

        // if (options.multipleSelection) {
        controller.allowsMultipleSelection = !!params.multipleSelection;
        // }
        console.log('about to open controller');

        // this.presentViewController(controller);
        const app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);

        app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(controller, true, null);
    });
}
