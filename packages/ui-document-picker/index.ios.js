import { Utils } from '@nativescript/core';
var DocumentPickerDelegate = /** @class */ (function (_super) {
    __extends(DocumentPickerDelegate, _super);
    function DocumentPickerDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerDelegate.initWithResolveReject = function (resolve, reject) {
        var delegate = DocumentPickerDelegate.new();
        delegate._resolve = resolve;
        delegate._reject = reject;
        return delegate;
    };
    DocumentPickerDelegate.prototype.cleanup = function (controller) {
        this._resolve = null;
        this._reject = null;
        controller.delegate = null;
        delegate = null;
    };
    DocumentPickerDelegate.prototype.documentPickerDidPickDocumentAtURL = function (controller, url) {
        this._resolve({
            files: [url.absoluteString],
            ios: url,
        });
        this.cleanup(controller);
    };
    DocumentPickerDelegate.prototype.documentPickerDidPickDocumentsAtURLs = function (controller, urls) {
        var output = [];
        for (var i = 0; i < urls.count; i++) {
            output.push(urls[i].absoluteString);
        }
        this._resolve({
            files: output,
            ios: urls,
        });
        this.cleanup(controller);
    };
    DocumentPickerDelegate.prototype.documentPickerWasCancelled = function (controller) {
        this._resolve({
            files: [],
        });
        this.cleanup(controller);
    };
    DocumentPickerDelegate.ObjCProtocols = [UIDocumentPickerDelegate];
    return DocumentPickerDelegate;
}(NSObject));
let delegate;
export function openFilePicker(params) {
    let documentTypes;
    if (params.extensions && params.extensions.length > 0) {
        documentTypes = Utils.ios.collections.jsArrayToNSArray(params.extensions);
    }
    return new Promise((resolve, reject) => {
        const controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(documentTypes, params.pickerMode !== undefined ? params.pickerMode : 0);
        delegate = DocumentPickerDelegate.initWithResolveReject(resolve, reject);
        controller.delegate = delegate;
        controller.allowsMultipleSelection = !!params.multipleSelection;
        const app = UIApplication.sharedApplication;
        const window = app.keyWindow || (app.windows.count > 0 && app.windows[0]);
        const visibleVC = Utils.ios.getVisibleViewController(window.rootViewController);
        visibleVC.presentViewControllerAnimatedCompletion(controller, true, null);
    });
}
//# sourceMappingURL=index.ios.js.map