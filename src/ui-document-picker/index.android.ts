import { request } from '@nativescript-community/perms';
import { AndroidActivityResultEventData, AndroidApplication, Application, Device } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { CommonPickerOptions, FilePickerOptions, FolderPickerOptions } from './index.common';

export { FilePickerOptions };
let Intent: typeof android.content.Intent;
let FilePath: typeof com.nativescript.documentpicker.FilePath;

const sdkVersion = lazy(() => parseInt(Device.sdkVersion, 10));

async function callIntent(context, intent, pickerType) {
    await request('storage');
    return new Promise((resolve: (r: AndroidActivityResultEventData) => void, reject) => {
        const onEvent = function (e: AndroidActivityResultEventData) {
            if (e.requestCode === pickerType) {
                resolve(e);
                Application.android.off(AndroidApplication.activityResultEvent, onEvent);
            }
        };
        Application.android.once(AndroidApplication.activityResultEvent, onEvent);
        context.startActivityForResult(intent, pickerType);
    });
}

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

function prepareIntent(intent: android.content.Intent, options: CommonPickerOptions) {
    const perms = options.permissions;
    if (perms) {
        if (perms.write) {
            intent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
        }
        if (perms.read) {
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        }
        if (perms.persistable) {
            intent.addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
        }
        if (perms.recursive) {
            intent.addFlags(Intent.FLAG_GRANT_PREFIX_URI_PERMISSION);
        }
    }
    if (options.multipleSelection) {
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
    }
    if (options.cloud !== undefined) {
        intent.putExtra(Intent.EXTRA_LOCAL_ONLY, !options.cloud);
    }
}

export function openFilePicker(params: FilePickerOptions = {}) {
    const context = Application.android.foregroundActivity || Application.android.startActivity;
    const FILE_CODE = 1231;

    if (!Intent) {
        Intent = android.content.Intent;
    }
    if (!FilePath) {
        FilePath = com.nativescript.documentpicker.FilePath;
    }
    const intent = new Intent(Intent.ACTION_GET_CONTENT);

    // Convert extensions to mime type
    let mimeTypes: string[];
    if (params.extensions) {
        const singleton = android.webkit.MimeTypeMap.getSingleton();
        mimeTypes = params.extensions?.map((s) => singleton.getMimeTypeFromExtension(s.replace('.', ''))).filter((s) => !!s);
    }

    if (mimeTypes?.length) {
        intent.setType(mimeTypes[0]);
        if (mimeTypes.length > 1) {
            intent.putExtra(Intent.EXTRA_MIME_TYPES, convertToArray(mimeTypes.slice(1)));
        }
    } else {
        intent.setType('*/*');
    }

    intent.addCategory(Intent.CATEGORY_OPENABLE);
    intent.setAction(Intent.ACTION_OPEN_DOCUMENT);
    prepareIntent(intent, params);
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
                        files: [sdkVersion() >= 30 ? uri.toString() : FilePath.getPath(context, uri)],
                        android: uri
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
                                if (sdkVersion() >= 30) {
                                    files.push(uri.toString());
                                } else {
                                    files.push(FilePath.getPath(context, uri));
                                }
                            }
                        }
                    }
                    return {
                        files,
                        android: clip
                    };
                }
            }
            return {
                files: []
            };
        } else {
            return {
                files: []
            };
        }
    });
}
function updatePersistableUris(context: android.content.Context, uri: android.net.Uri) {
    const contentResolver = context.getContentResolver();
    // contentResolver.getPersistedUriPermissions()
    //     .filter { it.isReadPermission }
    //     .filter { it.uri != uri }
    //     .forEach {
    //         contentResolver.releasePersistableUriPermission(
    //             it.uri,
    //             Intent.FLAG_GRANT_READ_URI_PERMISSION
    //         )
    //     }
    if (contentResolver.takePersistableUriPermission) {
        contentResolver.takePersistableUriPermission(uri, Intent.FLAG_GRANT_READ_URI_PERMISSION);
    }
}
export function pickFolder(params: FolderPickerOptions = {}) {
    const context = Application.android.foregroundActivity || Application.android.startActivity;
    const FOLDER_CODE = 1232;
    if (!Intent) {
        Intent = android.content.Intent;
    }
    const intent = new Intent(Intent.ACTION_OPEN_DOCUMENT_TREE);
    prepareIntent(intent, params);

    return callIntent(context, intent, FOLDER_CODE).then((result: AndroidActivityResultEventData) => {
        if (result.resultCode === android.app.Activity.RESULT_OK) {
            // The document selected by the user won't be returned in the intent.
            // Instead, a URI to that document will be contained in the return intent
            // provided to this method as a parameter.
            // Pull that URI using resultData.getData().
            if (result.intent != null) {
                const uri: android.net.Uri = (result.intent as android.content.Intent).getData();
                if (uri) {
                    if (params.permissions?.persistable) {
                        updatePersistableUris(context, uri);
                    }
                    return {
                        folders: [uri.toString()],
                        android: uri
                    };
                }

                const clip: android.content.ClipData = (result.intent as android.content.Intent).getClipData();
                if (clip) {
                    const count = clip.getItemCount();
                    const folders: string[] = [];
                    for (let i = 0; i < count; i++) {
                        const item: android.content.ClipData.Item = clip.getItemAt(i);
                        if (item) {
                            const uri: android.net.Uri = item.getUri();
                            if (uri) {
                                if (sdkVersion() >= 30) {
                                    folders.push(uri.toString());
                                } else {
                                    folders.push(FilePath.getPath(context, uri));
                                }
                            }
                        }
                    }
                    return {
                        folders,
                        android: clip
                    };
                }
            }
            return {
                folders: []
            };
        } else {
            return {
                folders: []
            };
        }
    });
}
