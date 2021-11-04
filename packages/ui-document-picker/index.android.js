import { request } from '@nativescript-community/perms';
import { android as androidApp, AndroidApplication, } from '@nativescript/core/application';
function callIntent(context, intent, pickerType) {
    return request('storage').then(() => new Promise((resolve, reject) => {
        const onEvent = function (e) {
            if (e.requestCode === pickerType) {
                resolve(e);
                androidApp.off(AndroidApplication.activityResultEvent, onEvent);
            }
        };
        androidApp.once(AndroidApplication.activityResultEvent, onEvent);
        context.startActivityForResult(intent, pickerType);
    }));
}
function convertToArray(types) {
    let mimeTypes;
    if (types && types.length > 0) {
        mimeTypes = Array.create(java.lang.String, types.length);
        for (let i = 0; i < types.length; i++) {
            mimeTypes[i] = types[i];
        }
    }
    return mimeTypes;
}
export function openFilePicker(params) {
    const context = androidApp.foregroundActivity || androidApp.startActivity;
    const FILE_CODE = 1231;
    const intent = new android.content.Intent(android.content.Intent.ACTION_GET_CONTENT);
    let mimeTypes = (params.extensions &&
        params.extensions
            .map((s) => android.webkit.MimeTypeMap.getSingleton().getMimeTypeFromExtension(s))
            .filter((s) => !!s));
    mimeTypes = convertToArray(mimeTypes);
    intent.setType('*/*');
    if (mimeTypes) {
        intent.putExtra(android.content.Intent.EXTRA_MIME_TYPES, mimeTypes);
    }
    intent.addCategory(android.content.Intent.CATEGORY_OPENABLE);
    intent.setAction(android.content.Intent.ACTION_OPEN_DOCUMENT);
    intent.putExtra(android.content.Intent.EXTRA_ALLOW_MULTIPLE, !!params.multipleSelection);
    return callIntent(context, intent, FILE_CODE).then((result) => {
        if (result.resultCode === android.app.Activity.RESULT_OK) {
            if (result.intent != null) {
                const uri = result.intent.getData();
                if (uri) {
                    return {
                        files: [com.nativescript.documentpicker.FilePath.getPath(context, uri)],
                        android: uri,
                    };
                }
                const clip = result.intent.getClipData();
                if (clip) {
                    const count = clip.getItemCount();
                    const files = [];
                    for (let i = 0; i < count; i++) {
                        const item = clip.getItemAt(i);
                        if (item) {
                            const uri = item.getUri();
                            if (uri) {
                                files.push(com.nativescript.documentpicker.FilePath.getPath(context, uri));
                            }
                        }
                    }
                    return {
                        files,
                        android: clip,
                    };
                }
            }
            return {
                files: [],
            };
        }
        else {
            return {
                files: [],
            };
        }
    });
}
//# sourceMappingURL=index.android.js.map