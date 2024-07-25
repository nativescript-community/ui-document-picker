import { request } from '@nativescript-community/perms';
import { AndroidActivityResultEventData, Application, File, Utils } from '@nativescript/core';
import { SDK_VERSION } from '@nativescript/core/utils';
import {
    CommonPickerOptions,
    CommonPickerPermissionsOptions,
    FilePickerOptions,
    FolderPickerOptions,
    SaveFileOptions
} from './index.common';

export { FilePickerOptions };
let Intent: typeof android.content.Intent;
let FilePath: typeof com.nativescript.documentpicker.FilePath;

async function callIntent(context, intent, pickerType) {
    await request('storage');
    return new Promise((resolve: (r: AndroidActivityResultEventData) => void, reject) => {
        const onEvent = function (e: AndroidActivityResultEventData) {
            if (e.requestCode === pickerType) {
                resolve(e);
                Application.android.off(Application.android.activityResultEvent, onEvent);
            }
        };
        Application.android.once(Application.android.activityResultEvent, onEvent);
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
    if (options.startingFolder) {
        intent.putExtra('android.provider.extra.INITIAL_URI', android.net.Uri.parse(options.startingFolder));
    }
}

export function openFilePicker(params: FilePickerOptions = {}) {
    const context = Application.android.startActivity;
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
    if (params.mimeTypes) {
        mimeTypes = mimeTypes || [];
        mimeTypes.push(...params.mimeTypes);
    }

    if (mimeTypes?.length) {
        intent.setType(mimeTypes[0]);
        if (mimeTypes.length > 1) {
            intent.putExtra(Intent.EXTRA_MIME_TYPES, convertToArray(mimeTypes));
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
                const uri: android.net.Uri = result.intent.getData();
                if (uri) {
                    return {
                        files: [SDK_VERSION >= 30 || params.forceSAF ? uri.toString() : FilePath.getPath(context, uri)],
                        // files: [uri.toString()],
                        android: uri
                    };
                }

                const clip: android.content.ClipData = result.intent.getClipData();
                if (clip) {
                    const count = clip.getItemCount();
                    const files: string[] = [];
                    for (let i = 0; i < count; i++) {
                        const item: android.content.ClipData.Item = clip.getItemAt(i);
                        if (item) {
                            const uri: android.net.Uri = item.getUri();
                            if (uri) {
                                if (SDK_VERSION >= 30 || params.forceSAF) {
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
function updatePersistableUris(
    context: android.content.Context,
    uri: android.net.Uri,
    permissions: CommonPickerPermissionsOptions
) {
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
    let flags = 0;
    if (permissions.write) {
        flags = flags | Intent.FLAG_GRANT_WRITE_URI_PERMISSION;
    }
    if (permissions.read) {
        flags = flags | Intent.FLAG_GRANT_READ_URI_PERMISSION;
    }
    context.grantUriPermission(context.getPackageName(), uri, flags | Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
    if (contentResolver.takePersistableUriPermission) {
        contentResolver.takePersistableUriPermission(uri, flags);
    }
}
export function pickFolder(params: FolderPickerOptions = {}) {
    const context = Application.android.startActivity;
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
                const uri: android.net.Uri = result.intent.getData();
                if (uri) {
                    if (params.permissions?.persistable) {
                        updatePersistableUris(context, uri, params.permissions);
                    }
                    return {
                        folders: [uri.toString()],
                        android: uri
                    };
                }

                const clip: android.content.ClipData = result.intent.getClipData();
                if (clip) {
                    const count = clip.getItemCount();
                    const folders: string[] = [];
                    for (let i = 0; i < count; i++) {
                        const item: android.content.ClipData.Item = clip.getItemAt(i);
                        if (item) {
                            const uri: android.net.Uri = item.getUri();
                            if (uri) {
                                if (SDK_VERSION >= 30 || params.forceSAF) {
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

export async function saveFile(params: SaveFileOptions) {
    // const tempFile = knownFolders.temp().getFile(params.name);
    // if (typeof params.data === 'string') {
    //     await tempFile.writeText(params.data);
    // } else {
    //     await tempFile.write(params.data);
    // }
    const context = Application.android.startActivity;
    const FILE_CODE = 1233;

    if (!Intent) {
        Intent = android.content.Intent;
    }
    if (!FilePath) {
        FilePath = com.nativescript.documentpicker.FilePath;
    }
    const intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
    intent.putExtra(Intent.EXTRA_TITLE, params.name);
    intent.addCategory(Intent.CATEGORY_OPENABLE);
    if (params.mimeType) {
        intent.setType(params.mimeType);
    } else {
        intent.setType('*/*');
    }
    prepareIntent(intent, params);
    return callIntent(context, intent, FILE_CODE).then((result: AndroidActivityResultEventData) => {
        if (result.resultCode === android.app.Activity.RESULT_OK) {
            if (result.intent != null) {
                const uri: android.net.Uri = result.intent.getData();
                const filePath = SDK_VERSION >= 30 || params.forceSAF ? uri.toString() : FilePath.getPath(context, uri);
                if (typeof params.data === 'string') {
                    return File.fromPath(filePath)
                        .writeText(params.data)
                        .then(() => true);
                    // await tempFile.writeText(params.data);
                } else {
                    return File.fromPath(filePath)
                        .write(params.data)
                        .then(() => true);
                    // await tempFile.write(params.data);
                }
            }
            return false;
        } else {
            return false;
        }
    });
}
