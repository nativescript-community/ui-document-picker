import { request } from '@nativescript-community/perms';
import {
  android as androidApp, AndroidActivityResultEventData, AndroidApplication,
} from '@nativescript/core/application';
import { FilePickerOptions } from './filepicker.common';

export { FilePickerOptions };

function callIntent(context, intent, pickerType) {
    return request('storage').then(
        () =>
            new Promise((resolve: (r: AndroidActivityResultEventData) => void, reject) => {
                const onEvent = function (e: AndroidActivityResultEventData) {
                    if (e.requestCode === pickerType) {
                        resolve(e);
                        androidApp.off(AndroidApplication.activityResultEvent, onEvent);
                    }
                };
                androidApp.once(AndroidApplication.activityResultEvent, onEvent);
                context.startActivityForResult(intent, pickerType);
            })
    );
}

// function getFilePath(context: android.content.Context, uri: android.net.Uri) {
//     console.log('getFilePath', uri);
//     // if (android.os.Build.VERSION.SDK_INT >= 26) {
//     //     const file = new java.io.File(uri.getPath()); // create path from uri
//     //     console.log('getFilePath 26', uri.getPath(), file.getPath(), file.getAbsolutePath());
//     //     return file.getAbsolutePath().split(':')[1];
//     // }

//     let selection = null;
//     let selectionArgs = null;
//     // Uri is different in versions after KITKAT (Android 4.4), we need to
//     if (android.os.Build.VERSION.SDK_INT >= 19 && android.provider.DocumentsContract.isDocumentUri(context.getApplicationContext(), uri)) {
//         if (isExternalStorageDocument(uri)) {
//             const docId = android.provider.DocumentsContract.getDocumentId(uri);
//             const split = docId.split(':');
//             return android.os.Environment.getExternalStorageDirectory() + '/' + split[1];
//         } else if (isDownloadsDocument(uri)) {
//             const id = android.provider.DocumentsContract.getDocumentId(uri);
//             uri = android.content.ContentUris.withAppendedId(android.net.Uri.parse('content://downloads/public_downloads'), parseInt(id, 10));
//         } else if (isMediaDocument(uri)) {
//             const docId = android.provider.DocumentsContract.getDocumentId(uri);
//             const split = docId.split(':');
//             const type = split[0];
//             if (type === 'image') {
//                 uri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
//             } else if (type === 'video') {
//                 uri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
//             } else if (type === 'audio') {
//                 uri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
//             }
//             selection = '_id=?';
//             selectionArgs = [split[1]];
//         }
//     }
//     if (uri.getScheme().toLowerCase() === 'content') {
//         console.log('testing content')
//         if (isGooglePhotosUri(uri)) {
//             return uri.getLastPathSegment();
//         }

//         const projection = [(android.provider.MediaStore.Images.Media as any).DATA];
//         let cursor: android.database.Cursor = null;
//         try {
//             cursor = context.getContentResolver().query(uri, projection, selection, selectionArgs, null);
//             console.log('testing cusror', uri, cursor)
//             const column_index = cursor.getColumnIndexOrThrow((android.provider.MediaStore.Images.Media as any).DATA);
//             if (cursor && cursor.moveToFirst()) {
//                 return cursor.getString(column_index);
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     } else if (uri.getScheme().toLowerCase() === 'file') {
//         return uri.getPath();
//     }
//     return null;
// }

// function isExternalStorageDocument(uri) {
//     return uri.getAuthority() === 'com.android.externalstorage.documents';
// }

// function isDownloadsDocument(uri) {
//     return uri.getAuthority() === 'com.android.providers.downloads.documents';
// }

// function isMediaDocument(uri) {
//     return uri.getAuthority() === 'com.android.providers.media.documents';
// }

// function isGooglePhotosUri(uri) {
//     return uri.getAuthority() === 'com.google.android.apps.photos.content';
// }

/**
 * Convert to android Array
 */
function convertToArray(types) {
    let mimeTypes: string[];
    if (types && types.length > 0) {
        mimeTypes = Array.create(java.lang.String, types.length);
        for (let i = 0; i < types.length; i++) {
            mimeTypes[i] = types[i];
        }
    }
    return mimeTypes;
}

export function openFilePicker(params: FilePickerOptions) {
    // const FilePickerActivity = (com as any).nononsenseapps.filepicker.FilePickerActivity;
    // const Utils = (com as any).nononsenseapps.filepicker.Utils;

    //     const  intent = new android.content.Intent(android.content.Intent.ACTION_GET_CONTENT);
    //     intent.setType("*/*.im");
    //     intent.addCategory(Intent.CATEGORY_OPENABLE);

    // try {
    //     startActivityForResult(
    //             Intent.createChooser(intent, "Select a File to Upload"),
    //             FILE_SELECT_CODE);
    // } catch (android.content.ActivityNotFoundException ex) {
    //     // Potentially direct the user to the Market with a Dialog
    //     Toast.makeText(this, "Please install a File Manager.",
    //             Toast.LENGTH_SHORT).show();
    // }

    const context = androidApp.foregroundActivity || androidApp.startActivity;
    const FILE_CODE = 1231;

    const intent = new android.content.Intent(android.content.Intent.ACTION_GET_CONTENT);

    // Convert extensions to mime type
    let mimeTypes  =
        (params.extensions &&
            params.extensions
                .map((s) => android.webkit.MimeTypeMap.getSingleton().getMimeTypeFromExtension(s))
                .filter((s) => !!s));
    // convert to Array
    mimeTypes = convertToArray(mimeTypes);

    intent.setType('*/*');
    if(mimeTypes){
        intent.putExtra(android.content.Intent.EXTRA_MIME_TYPES, mimeTypes);
    }

    intent.addCategory(android.content.Intent.CATEGORY_OPENABLE);
    intent.setAction(android.content.Intent.ACTION_OPEN_DOCUMENT);
    // const intent = new android.content.Intent(androidApp.foregroundActivity, FilePickerActivity.class);
    intent.putExtra(android.content.Intent.EXTRA_ALLOW_MULTIPLE, !!params.multipleSelection);
    // intent.putExtra(FilePickerActivity.EXTRA_ALLOW_CREATE_DIR, false);
    // intent.putExtra(FilePickerActivity.EXTRA_MODE, FilePickerActivity.MODE_FILE);
    // intent.putExtra(android.content.Intent.EXTRA_START_PATH, android.os.Environment.getExternalStorageDirectory().getPath());
    return callIntent(context, intent, FILE_CODE).then((result: AndroidActivityResultEventData) => {
        if (result.resultCode === android.app.Activity.RESULT_OK) {
            // The document selected by the user won't be returned in the intent.
            // Instead, a URI to that document will be contained in the return intent
            // provided to this method as a parameter.
            // Pull that URI using resultData.getData().
            if (result.intent != null) {
                const uri: android.net.Uri = (result.intent as android.content.Intent).getData();
                if (uri) {
                    return {
                        files: [(com as any).nativescript.documentpicker.FilePath.getPath(context, uri)],
                        android: uri,
                    };
                }

                const clip: android.content.ClipData = (result.intent as android.content.Intent).getClipData();
                if (clip) {
                    const count = clip.getItemCount();
                    const files: string[] = [];
                    for (let i = 0; i < count; i++) {
                        const item: android.content.ClipData.Item = clip.getItemAt(i);
                        if (item) {
                            const uri: android.net.Uri = item.getUri();
                            if (uri) {
                                files.push((com as any).nativescript.documentpicker.FilePath.getPath(context, uri));
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

            // Use the provided utility method to parse the result
            // const output = [];
            // const files = Utils.getSelectedFilesFromResult(intent);
            // for (let i = 0; i < files.count; i++) {
            //     output.push(Utils.getFileForUri(files[i]));
            // }
            // return {
            //     files: output,
            //     android: files
            // };
        } else {
            return {
                files: [],
            };
        }
    });
}
