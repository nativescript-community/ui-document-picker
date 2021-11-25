declare namespace com {
    declare namespace nativescript {
        declare namespace documentpicker {
            declare class FilePath {
                static getPath(context: globalAndroid.content.Context, uri: android.net.Uri) : string
            }
        }
    }
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class ActivityWrapper extends java.lang.Object implements com.anggrayudi.storage.ComponentWrapper {
				public static class: java.lang.Class<com.anggrayudi.storage.ActivityWrapper>;
				public getActivity(): globalAndroid.app.Activity;
				public getContext(): globalAndroid.content.Context;
				public constructor(param0: globalAndroid.app.Activity);
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): boolean;
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.anggrayudi.storage.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class ComponentActivityWrapper extends java.lang.Object implements com.anggrayudi.storage.ComponentWrapper {
				public static class: java.lang.Class<com.anggrayudi.storage.ComponentActivityWrapper>;
				public storage: com.anggrayudi.storage.SimpleStorage;
				public getStorage(): com.anggrayudi.storage.SimpleStorage;
				public getActivity(): globalAndroid.app.Activity;
				public getContext(): globalAndroid.content.Context;
				public setRequestCode(param0: number): void;
				public setStorage(param0: com.anggrayudi.storage.SimpleStorage): void;
				public constructor(param0: androidx.activity.ComponentActivity);
				public getRequestCode(): number;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): boolean;
				public getActivity(): androidx.activity.ComponentActivity;
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class ComponentWrapper extends java.lang.Object {
				public static class: java.lang.Class<com.anggrayudi.storage.ComponentWrapper>;
				/**
				 * Constructs a new instance of the com.anggrayudi.storage.ComponentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getContext(): globalAndroid.content.Context;
					getActivity(): globalAndroid.app.Activity;
					startActivityForResult(param0: globalAndroid.content.Intent, param1: number): boolean;
				});
				public constructor();
				public getActivity(): globalAndroid.app.Activity;
				public getContext(): globalAndroid.content.Context;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): boolean;
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class FragmentWrapper extends java.lang.Object implements com.anggrayudi.storage.ComponentWrapper {
				public static class: java.lang.Class<com.anggrayudi.storage.FragmentWrapper>;
				public storage: com.anggrayudi.storage.SimpleStorage;
				public getStorage(): com.anggrayudi.storage.SimpleStorage;
				public getActivity(): globalAndroid.app.Activity;
				public getContext(): globalAndroid.content.Context;
				public setRequestCode(param0: number): void;
				public constructor(param0: androidx.fragment.app.Fragment);
				public setStorage(param0: com.anggrayudi.storage.SimpleStorage): void;
				public getActivity(): androidx.fragment.app.FragmentActivity;
				public getRequestCode(): number;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): boolean;
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class SimpleStorage extends java.lang.Object {
				public static class: java.lang.Class<com.anggrayudi.storage.SimpleStorage>;
				public static Companion: com.anggrayudi.storage.SimpleStorage.Companion;
				public getRequestCodeFilePicker(): number;
				public getFolderPickerCallback(): com.anggrayudi.storage.callback.FolderPickerCallback;
				public getFilePickerCallback(): com.anggrayudi.storage.callback.FilePickerCallback;
				public isStorageAccessGranted(param0: string): boolean;
				public checkIfFileReceived(param0: globalAndroid.content.Intent): void;
				public getFileReceiverCallback(): com.anggrayudi.storage.callback.FileReceiverCallback;
				public static hasStoragePermission(param0: globalAndroid.content.Context): boolean;
				public setStorageAccessCallback(param0: com.anggrayudi.storage.callback.StorageAccessCallback): void;
				public openFolderPicker(): void;
				public setCreateFileCallback(param0: com.anggrayudi.storage.callback.CreateFileCallback): void;
				public createFile(param0: string, param1: string, param2: number): void;
				public createFile(param0: string, param1: string): void;
				public setFileReceiverCallback(param0: com.anggrayudi.storage.callback.FileReceiverCallback): void;
				public static isSdCardPresent(): boolean;
				public getContext(): globalAndroid.content.Context;
				public constructor(param0: androidx.fragment.app.Fragment, param1: globalAndroid.os.Bundle);
				public getCreateFileCallback(): com.anggrayudi.storage.callback.CreateFileCallback;
				public openFilePicker(param0: number, param1: boolean, param2: androidNative.Array<string>): void;
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType, param2: com.anggrayudi.storage.file.StorageType, param3: string): void;
				public static cleanupRedundantUriPermissions(param0: globalAndroid.content.Context): void;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public requestStorageAccess(param0: number): void;
				public openFolderPicker(param0: number): void;
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType, param2: com.anggrayudi.storage.file.StorageType): void;
				public setFolderPickerCallback(param0: com.anggrayudi.storage.callback.FolderPickerCallback): void;
				public createFile(param0: string): void;
				public getRequestCodeStorageAccess(): number;
				public setRequestCodeFolderPicker(param0: number): void;
				public getRequestCodeCreateFile(): number;
				public setRequestCodeStorageAccess(param0: number): void;
				public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle);
				public static hasFullDiskAccess(param0: globalAndroid.content.Context, param1: string): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
				public getStorageAccessCallback(): com.anggrayudi.storage.callback.StorageAccessCallback;
				public openFilePicker(param0: number, param1: androidNative.Array<string>): void;
				public setRequestCodeFilePicker(param0: number): void;
				public openFilePicker(param0: androidNative.Array<string>): void;
				public requestStorageAccess(): void;
				public setRequestCodeCreateFile(param0: number): void;
				public static hasStorageReadPermission(param0: globalAndroid.content.Context): boolean;
				public getRequestCodeFolderPicker(): number;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public static getDefaultExternalStorageIntent(): globalAndroid.content.Intent;
				public constructor(param0: androidx.activity.ComponentActivity, param1: globalAndroid.os.Bundle);
				public requestFullStorageAccess(): void;
				public static getExternalStoragePath(): string;
				public static hasStorageAccess(param0: globalAndroid.content.Context, param1: string, param2: boolean): boolean;
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType): void;
				public static hasStorageAccess(param0: globalAndroid.content.Context, param1: string): boolean;
				public setFilePickerCallback(param0: com.anggrayudi.storage.callback.FilePickerCallback): void;
			}
			export module SimpleStorage {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.SimpleStorage.Companion>;
					public hasFullDiskAccess(param0: globalAndroid.content.Context, param1: string): boolean;
					public hasStorageAccess(param0: globalAndroid.content.Context, param1: string, param2: boolean): boolean;
					public getExternalStoragePath(): string;
					public hasStoragePermission(param0: globalAndroid.content.Context): boolean;
					public hasStorageAccess(param0: globalAndroid.content.Context, param1: string): boolean;
					public cleanupRedundantUriPermissions(param0: globalAndroid.content.Context): void;
					public getDefaultExternalStorageIntent(): globalAndroid.content.Intent;
					public hasStorageReadPermission(param0: globalAndroid.content.Context): boolean;
					public isSdCardPresent(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export class SimpleStorageHelper extends java.lang.Object {
				public static class: java.lang.Class<com.anggrayudi.storage.SimpleStorageHelper>;
				public static Companion: com.anggrayudi.storage.SimpleStorageHelper.Companion;
				public static TYPE_FILE_PICKER: number;
				public static TYPE_FOLDER_PICKER: number;
				public setOnStorageAccessGranted(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public getOnFileSelected(): kotlin.jvm.functions.Function2<java.lang.Integer,java.util.List<any>,kotlin.Unit>;
				public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
				public openFilePicker(param0: number, param1: androidNative.Array<string>): void;
				public getOnFolderSelected(): kotlin.jvm.functions.Function2<java.lang.Integer,androidx.documentfile.provider.DocumentFile,kotlin.Unit>;
				public openFolderPicker(): void;
				public createFile(param0: string, param1: string, param2: number): void;
				public setOnFolderSelected(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public openFilePicker(param0: androidNative.Array<string>): void;
				public requestStorageAccess(): void;
				public createFile(param0: string, param1: string): void;
				public constructor(param0: androidx.activity.ComponentActivity);
				public setOnFileReceived(param0: com.anggrayudi.storage.SimpleStorageHelper.OnFileReceived): void;
				public getStorage(): com.anggrayudi.storage.SimpleStorage;
				public getOnFileReceived(): com.anggrayudi.storage.SimpleStorageHelper.OnFileReceived;
				public constructor(param0: androidx.fragment.app.Fragment, param1: globalAndroid.os.Bundle);
				public constructor(param0: androidx.fragment.app.Fragment);
				public setOnFileSelected(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public openFilePicker(param0: number, param1: boolean, param2: androidNative.Array<string>): void;
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType, param2: com.anggrayudi.storage.file.StorageType, param3: string): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public getOnStorageAccessGranted(): kotlin.jvm.functions.Function2<java.lang.Integer,androidx.documentfile.provider.DocumentFile,kotlin.Unit>;
				public setOnFileCreated(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
				public constructor(param0: globalAndroid.app.Activity, param1: number);
				public requestStorageAccess(param0: number): void;
				public openFolderPicker(param0: number): void;
				public constructor(param0: globalAndroid.app.Activity, param1: number, param2: globalAndroid.os.Bundle);
				public getOnFileCreated(): kotlin.jvm.functions.Function2<java.lang.Integer,androidx.documentfile.provider.DocumentFile,kotlin.Unit>;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				public constructor(param0: androidx.activity.ComponentActivity, param1: globalAndroid.os.Bundle);
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType, param2: com.anggrayudi.storage.file.StorageType): void;
				public createFile(param0: string): void;
				public requestStorageAccess(param0: number, param1: com.anggrayudi.storage.file.StorageType): void;
				public static redirectToSystemSettings(param0: globalAndroid.content.Context): void;
			}
			export module SimpleStorageHelper {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.SimpleStorageHelper.Companion>;
					public redirectToSystemSettings(param0: globalAndroid.content.Context): void;
				}
				export class OnFileReceived extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.SimpleStorageHelper.OnFileReceived>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.SimpleStorageHelper$OnFileReceived interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFileReceived(param0: java.util.List<any>): void;
						onNonFileReceived(param0: globalAndroid.content.Intent): void;
					});
					public constructor();
					public onFileReceived(param0: java.util.List<any>): void;
					public onNonFileReceived(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export abstract class BaseFileCallback<ErrorCode, Report, Result>  extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.BaseFileCallback<any,any,any>>;
					public constructor(param0: kotlinx.coroutines.CoroutineScope);
					public setUiScope(param0: kotlinx.coroutines.CoroutineScope): void;
					public onCheckFreeSpace(param0: number, param1: number): boolean;
					public getUiScope(): kotlinx.coroutines.CoroutineScope;
					public onDeleteConflictedFiles(): void;
					public onCompleted(param0: Result): void;
					public onReport(param0: Report): void;
					public onValidate(): void;
					public onPrepare(): void;
					public onFailed(param0: ErrorCode): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export class CreateFileCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.CreateFileCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.callback.CreateFileCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCanceledByUser(param0: number): void;
						onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
						onFileCreated(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
					});
					public constructor();
					public onCanceledByUser(param0: number): void;
					public onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
					public onFileCreated(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export abstract class FileCallback extends com.anggrayudi.storage.callback.BaseFileCallback<com.anggrayudi.storage.callback.FileCallback.ErrorCode,com.anggrayudi.storage.callback.FileCallback.Report,any> {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.FileCallback>;
					public onStart(param0: any, param1: java.lang.Thread): number;
					public constructor(param0: kotlinx.coroutines.CoroutineScope);
					public onConflict(param0: androidx.documentfile.provider.DocumentFile, param1: com.anggrayudi.storage.callback.FileCallback.FileConflictAction): void;
					public constructor();
					public onCompleted(param0: any): void;
				}
				export module FileCallback {
					export class ConflictResolution {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FileCallback.ConflictResolution>;
						public static REPLACE: com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
						public static CREATE_NEW: com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
						public static SKIP: com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
						public static valueOf(param0: string): com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public toCreateMode(): com.anggrayudi.storage.file.CreateMode;
						public static values(): androidNative.Array<com.anggrayudi.storage.callback.FileCallback.ConflictResolution>;
					}
					export class ErrorCode {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FileCallback.ErrorCode>;
						public static STORAGE_PERMISSION_DENIED: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static CANNOT_CREATE_FILE_IN_TARGET: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static SOURCE_FILE_NOT_FOUND: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static TARGET_FILE_NOT_FOUND: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static TARGET_FOLDER_NOT_FOUND: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static UNKNOWN_IO_ERROR: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static CANCELED: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static TARGET_FOLDER_CANNOT_HAVE_SAME_PATH_WITH_SOURCE_FOLDER: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static NO_SPACE_LEFT_ON_TARGET_PATH: com.anggrayudi.storage.callback.FileCallback.ErrorCode;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): androidNative.Array<com.anggrayudi.storage.callback.FileCallback.ErrorCode>;
						public static valueOf(param0: string): com.anggrayudi.storage.callback.FileCallback.ErrorCode;
					}
					export class FileConflictAction extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FileCallback.FileConflictAction>;
						public confirmResolution(param0: com.anggrayudi.storage.callback.FileCallback.ConflictResolution): void;
						public constructor(param0: kotlinx.coroutines.CancellableContinuation<any>);
					}
					export class Report extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FileCallback.Report>;
						public getBytesMoved(): number;
						public getWriteSpeed(): number;
						public getProgress(): number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export class FilePickerCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.FilePickerCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.callback.FilePickerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCanceledByUser(param0: number): void;
						onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
						onStoragePermissionDenied(param0: number, param1: java.util.List<any>): void;
						onFileSelected(param0: number, param1: java.util.List<any>): void;
					});
					public constructor();
					public onFileSelected(param0: number, param1: java.util.List<any>): void;
					public onCanceledByUser(param0: number): void;
					public onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
					public onStoragePermissionDenied(param0: number, param1: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export class FileReceiverCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.FileReceiverCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.callback.FileReceiverCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFileReceived(param0: java.util.List<any>): void;
						onNonFileReceived(param0: globalAndroid.content.Intent): void;
						onStoragePermissionDenied(param0: java.util.List<any>): void;
					});
					public constructor();
					public onFileReceived(param0: java.util.List<any>): void;
					public onNonFileReceived(param0: globalAndroid.content.Intent): void;
					public onStoragePermissionDenied(param0: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export abstract class FolderCallback extends com.anggrayudi.storage.callback.BaseFileCallback<com.anggrayudi.storage.callback.FolderCallback.ErrorCode,com.anggrayudi.storage.callback.FolderCallback.Report,com.anggrayudi.storage.callback.FolderCallback.Result> {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback>;
					public onStart(param0: androidx.documentfile.provider.DocumentFile, param1: number, param2: java.lang.Thread): number;
					public constructor(param0: kotlinx.coroutines.CoroutineScope);
					public onContentConflict(param0: androidx.documentfile.provider.DocumentFile, param1: java.util.List<com.anggrayudi.storage.callback.FolderCallback.FileConflict>, param2: com.anggrayudi.storage.callback.FolderCallback.FolderContentConflictAction): void;
					public constructor();
					public onParentConflict(param0: androidx.documentfile.provider.DocumentFile, param1: com.anggrayudi.storage.callback.FolderCallback.ParentFolderConflictAction, param2: boolean): void;
					public onCountingFiles(): void;
				}
				export module FolderCallback {
					export class ConflictResolution {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.ConflictResolution>;
						public static REPLACE: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public static MERGE: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public static CREATE_NEW: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public static SKIP: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public static values(): androidNative.Array<com.anggrayudi.storage.callback.FolderCallback.ConflictResolution>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public toCreateMode(): com.anggrayudi.storage.file.CreateMode;
						public static valueOf(param0: string): com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public toFileConflictResolution(): com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
					}
					export module ConflictResolution {
						export class WhenMappings extends java.lang.Object {
							public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.ConflictResolution.WhenMappings>;
						}
					}
					export class ErrorCode {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.ErrorCode>;
						public static STORAGE_PERMISSION_DENIED: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static CANNOT_CREATE_FILE_IN_TARGET: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static SOURCE_FOLDER_NOT_FOUND: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static SOURCE_FILE_NOT_FOUND: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static INVALID_TARGET_FOLDER: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static UNKNOWN_IO_ERROR: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static CANCELED: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static TARGET_FOLDER_CANNOT_HAVE_SAME_PATH_WITH_SOURCE_FOLDER: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static NO_SPACE_LEFT_ON_TARGET_PATH: com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static valueOf(param0: string): com.anggrayudi.storage.callback.FolderCallback.ErrorCode;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): androidNative.Array<com.anggrayudi.storage.callback.FolderCallback.ErrorCode>;
					}
					export class FileConflict extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.FileConflict>;
						public constructor(param0: androidx.documentfile.provider.DocumentFile, param1: androidx.documentfile.provider.DocumentFile, param2: com.anggrayudi.storage.callback.FileCallback.ConflictResolution);
						public getTarget(): androidx.documentfile.provider.DocumentFile;
						public setSolution(param0: com.anggrayudi.storage.callback.FileCallback.ConflictResolution): void;
						public getSolution(): com.anggrayudi.storage.callback.FileCallback.ConflictResolution;
						public getSource(): androidx.documentfile.provider.DocumentFile;
					}
					export class FolderContentConflictAction extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.FolderContentConflictAction>;
						public constructor(param0: kotlinx.coroutines.CancellableContinuation<any>);
						public confirmResolution(param0: java.util.List<com.anggrayudi.storage.callback.FolderCallback.FileConflict>): void;
					}
					export class ParentFolderConflictAction extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.ParentFolderConflictAction>;
						public confirmResolution(param0: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution): void;
						public constructor(param0: kotlinx.coroutines.CancellableContinuation<any>);
					}
					export class Report extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.Report>;
						public getBytesMoved(): number;
						public getWriteSpeed(): number;
						public getFileCount(): number;
						public getProgress(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
					export class Result extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderCallback.Result>;
						public getTotalCopiedFiles(): number;
						public getSuccess(): boolean;
						public constructor(param0: androidx.documentfile.provider.DocumentFile, param1: number, param2: number, param3: boolean);
						public getFolder(): androidx.documentfile.provider.DocumentFile;
						public getTotalFilesToCopy(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export class FolderPickerCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.FolderPickerCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.callback.FolderPickerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCanceledByUser(param0: number): void;
						onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
						onStoragePermissionDenied(param0: number): void;
						onStorageAccessDenied(param0: number, param1: androidx.documentfile.provider.DocumentFile, param2: com.anggrayudi.storage.file.StorageType): void;
						onFolderSelected(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
					});
					public constructor();
					public onCanceledByUser(param0: number): void;
					public onStoragePermissionDenied(param0: number): void;
					public onStorageAccessDenied(param0: number, param1: androidx.documentfile.provider.DocumentFile, param2: com.anggrayudi.storage.file.StorageType): void;
					public onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
					public onFolderSelected(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export abstract class MultipleFileCallback extends com.anggrayudi.storage.callback.BaseFileCallback<com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode,com.anggrayudi.storage.callback.MultipleFileCallback.Report,com.anggrayudi.storage.callback.MultipleFileCallback.Result> {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback>;
					public constructor(param0: kotlinx.coroutines.CoroutineScope);
					public onInvalidSourceFilesFound(param0: java.util.Map<androidx.documentfile.provider.DocumentFile,any>, param1: com.anggrayudi.storage.callback.MultipleFileCallback.InvalidSourceFilesAction): void;
					public onContentConflict(param0: androidx.documentfile.provider.DocumentFile, param1: java.util.List<com.anggrayudi.storage.callback.FolderCallback.FileConflict>, param2: com.anggrayudi.storage.callback.FolderCallback.FolderContentConflictAction): void;
					public onParentConflict(param0: androidx.documentfile.provider.DocumentFile, param1: java.util.List<com.anggrayudi.storage.callback.MultipleFileCallback.ParentConflict>, param2: java.util.List<com.anggrayudi.storage.callback.MultipleFileCallback.ParentConflict>, param3: com.anggrayudi.storage.callback.MultipleFileCallback.ParentFolderConflictAction): void;
					public constructor();
					public onStart(param0: java.util.List<any>, param1: number, param2: java.lang.Thread): number;
					public onCountingFiles(): void;
				}
				export module MultipleFileCallback {
					export class ErrorCode {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode>;
						public static STORAGE_PERMISSION_DENIED: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static CANNOT_CREATE_FILE_IN_TARGET: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static SOURCE_FILE_NOT_FOUND: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static INVALID_TARGET_FOLDER: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static UNKNOWN_IO_ERROR: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static CANCELED: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static NO_SPACE_LEFT_ON_TARGET_PATH: com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
						public static values(): androidNative.Array<com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.anggrayudi.storage.callback.MultipleFileCallback.ErrorCode;
					}
					export class InvalidSourceFilesAction extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.InvalidSourceFilesAction>;
						public confirmResolution(param0: boolean): void;
						public constructor(param0: kotlinx.coroutines.CancellableContinuation<any>);
					}
					export class ParentConflict extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.ParentConflict>;
						public constructor(param0: androidx.documentfile.provider.DocumentFile, param1: androidx.documentfile.provider.DocumentFile, param2: boolean, param3: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution);
						public getCanMerge(): boolean;
						public getSolution(): com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
						public getTarget(): androidx.documentfile.provider.DocumentFile;
						public setSolution(param0: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution): void;
						public getSource(): androidx.documentfile.provider.DocumentFile;
					}
					export class ParentFolderConflictAction extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.ParentFolderConflictAction>;
						public confirmResolution(param0: java.util.List<com.anggrayudi.storage.callback.MultipleFileCallback.ParentConflict>): void;
						public constructor(param0: kotlinx.coroutines.CancellableContinuation<any>);
					}
					export class Report extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.Report>;
						public getBytesMoved(): number;
						public getWriteSpeed(): number;
						public getFileCount(): number;
						public getProgress(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
					export class Result extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.callback.MultipleFileCallback.Result>;
						public getTotalCopiedFiles(): number;
						public getSuccess(): boolean;
						public constructor(param0: java.util.List<any>, param1: number, param2: number, param3: boolean);
						public getTotalFilesToCopy(): number;
						public getFiles(): java.util.List<androidx.documentfile.provider.DocumentFile>;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module callback {
				export class StorageAccessCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.callback.StorageAccessCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.callback.StorageAccessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCanceledByUser(param0: number): void;
						onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
						onRootPathNotSelected(param0: number, param1: string, param2: globalAndroid.net.Uri, param3: com.anggrayudi.storage.file.StorageType, param4: com.anggrayudi.storage.file.StorageType): void;
						onExpectedStorageNotSelected(param0: number, param1: androidx.documentfile.provider.DocumentFile, param2: com.anggrayudi.storage.file.StorageType, param3: string, param4: com.anggrayudi.storage.file.StorageType): void;
						onStoragePermissionDenied(param0: number): void;
						onRootPathPermissionGranted(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
					});
					public constructor();
					public onCanceledByUser(param0: number): void;
					public onStoragePermissionDenied(param0: number): void;
					public onRootPathNotSelected(param0: number, param1: string, param2: globalAndroid.net.Uri, param3: com.anggrayudi.storage.file.StorageType, param4: com.anggrayudi.storage.file.StorageType): void;
					public onExpectedStorageNotSelected(param0: number, param1: androidx.documentfile.provider.DocumentFile, param2: com.anggrayudi.storage.file.StorageType, param3: string, param4: com.anggrayudi.storage.file.StorageType): void;
					public onRootPathPermissionGranted(param0: number, param1: androidx.documentfile.provider.DocumentFile): void;
					public onActivityHandlerNotFound(param0: number, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class ContextUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.ContextUtils>;
					public static getAppDirectory(param0: globalAndroid.content.Context, param1: string): string;
					public static unregisterReceiverSafely(param0: globalAndroid.content.Context, param1: globalAndroid.content.BroadcastReceiver): void;
					public static startActivityForResultSafely(param0: globalAndroid.app.Activity, param1: number, param2: globalAndroid.content.Intent): void;
					public static fromTreeUri(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): androidx.documentfile.provider.DocumentFile;
					public static hasActivityHandler(param0: globalAndroid.content.Intent, param1: globalAndroid.content.Context): boolean;
					public static fromSingleUri(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): androidx.documentfile.provider.DocumentFile;
					public static startActivitySafely(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class CoroutineExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.CoroutineExtKt>;
					public static startCoroutineTimer(param0: number, param1: number, param2: boolean, param3: kotlin.jvm.functions.Function0<kotlin.Unit>): kotlinx.coroutines.Job;
					public static launchOnUiThread(param0: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
					public static postToUi(param0: kotlinx.coroutines.CoroutineScope, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public static awaitUiResult(param0: kotlinx.coroutines.CoroutineScope, param1: kotlin.jvm.functions.Function0): any;
					public static awaitUiResultWithPending(param0: kotlinx.coroutines.CoroutineScope, param1: kotlin.jvm.functions.Function1): any;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class IOUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.IOUtils>;
					public static closeStream(param0: java.io.InputStream): void;
					public static closeStream(param0: java.io.OutputStream): void;
					public static closeStream(param0: java.io.Reader): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class PrimitivesExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.PrimitivesExtKt>;
					public static toBoolean(param0: java.lang.Integer): boolean;
					public static toInt(param0: java.lang.Boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class TextUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.TextUtils>;
					public static trimWhiteSpace(param0: string): string;
					public static hasParent(param0: string, param1: string): boolean;
					public static count(param0: string, param1: string): number;
					public static trimFileSeparator(param0: string): string;
					public static replaceCompletely(param0: string, param1: string, param2: string): string;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module extension {
				export class UriUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.extension.UriUtils>;
					public static isDownloadsDocument(param0: globalAndroid.net.Uri): boolean;
					public static isExternalStorageDocument(param0: globalAndroid.net.Uri): boolean;
					public static isRawFile(param0: globalAndroid.net.Uri): boolean;
					public static toMediaFile(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): com.anggrayudi.storage.media.MediaFile;
					public static getStorageId(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): string;
					public static openOutputStream(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): java.io.OutputStream;
					public static isTreeDocumentFile(param0: globalAndroid.net.Uri): boolean;
					public static isMediaDocument(param0: globalAndroid.net.Uri): boolean;
					public static isMediaFile(param0: globalAndroid.net.Uri): boolean;
					public static toDocumentFile(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static openInputStream(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): java.io.InputStream;
					public static openOutputStream(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context, param2: boolean): java.io.OutputStream;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class CreateMode {
					public static class: java.lang.Class<com.anggrayudi.storage.file.CreateMode>;
					public static REUSE: com.anggrayudi.storage.file.CreateMode;
					public static REPLACE: com.anggrayudi.storage.file.CreateMode;
					public static CREATE_NEW: com.anggrayudi.storage.file.CreateMode;
					public static valueOf(param0: string): com.anggrayudi.storage.file.CreateMode;
					public static values(): androidNative.Array<com.anggrayudi.storage.file.CreateMode>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class DocumentFileCompat extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.DocumentFileCompat>;
					public static INSTANCE: com.anggrayudi.storage.file.DocumentFileCompat;
					public static EXTERNAL_STORAGE_AUTHORITY: string;
					public static DOWNLOADS_FOLDER_AUTHORITY: string;
					public static MEDIA_FOLDER_AUTHORITY: string;
					public static DOWNLOADS_TREE_URI: string;
					public static recreate(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): androidx.documentfile.provider.DocumentFile;
					public static fromFullPath(param0: globalAndroid.content.Context, param1: string, param2: com.anggrayudi.storage.file.DocumentFileType, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static buildAbsolutePath(param0: globalAndroid.content.Context, param1: string, param2: string): string;
					public static fromFile(param0: globalAndroid.content.Context, param1: java.io.File, param2: com.anggrayudi.storage.file.DocumentFileType): androidx.documentfile.provider.DocumentFile;
					public static createFile(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static mkdirs(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static mkdirs(param0: globalAndroid.content.Context, param1: java.util.List<string>, param2: boolean): androidNative.Array<androidx.documentfile.provider.DocumentFile>;
					public static fromUri(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): androidx.documentfile.provider.DocumentFile;
					public static mkdirs(param0: globalAndroid.content.Context, param1: java.util.List<string>): androidNative.Array<androidx.documentfile.provider.DocumentFile>;
					public static isRootUri(param0: globalAndroid.net.Uri): boolean;
					public static getAccessibleRootDocumentFile(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static isStorageUriPermissionGranted(param0: globalAndroid.content.Context, param1: string): boolean;
					public static getRootDocumentFile(param0: globalAndroid.content.Context, param1: string, param2: boolean): androidx.documentfile.provider.DocumentFile;
					public static isDownloadsUriPermissionGranted(param0: globalAndroid.content.Context): boolean;
					public static findInaccessibleStorageLocations(param0: globalAndroid.content.Context, param1: java.util.List<string>): java.util.List<string>;
					public static getRootDocumentFile(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static getAccessibleRootDocumentFile(param0: globalAndroid.content.Context, param1: string, param2: boolean, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static buildSimplePath(param0: string, param1: string): string;
					public static mkdirs(param0: globalAndroid.content.Context, param1: string, param2: boolean): androidx.documentfile.provider.DocumentFile;
					public static getStorageCapacity(param0: globalAndroid.content.Context, param1: string): number;
					public static getAccessibleRootDocumentFile(param0: globalAndroid.content.Context, param1: string, param2: boolean): androidx.documentfile.provider.DocumentFile;
					public static getBasePath(param0: globalAndroid.content.Context, param1: string): string;
					public static getSdCardIds(param0: globalAndroid.content.Context): java.util.List<string>;
					public static mkdirs(param0: globalAndroid.content.Context, param1: java.util.List<string>, param2: boolean, param3: boolean): androidNative.Array<androidx.documentfile.provider.DocumentFile>;
					public static mkdirs(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static createDocumentUri(param0: string): globalAndroid.net.Uri;
					public static createDocumentUri(param0: string, param1: string): globalAndroid.net.Uri;
					public static isAccessGranted(param0: globalAndroid.content.Context, param1: string): boolean;
					public getFILE_NAME_DUPLICATION_REGEX_WITHOUT_EXTENSION(): kotlin.text.Regex;
					public static getRootRawFile(param0: globalAndroid.content.Context, param1: string): java.io.File;
					public static getRootDocumentFile(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static getFreeSpace(param0: globalAndroid.content.Context, param1: string): number;
					public static buildAbsolutePath(param0: globalAndroid.content.Context, param1: string): string;
					public static doesExist(param0: globalAndroid.content.Context, param1: string): boolean;
					public static createFile(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static createFile(param0: globalAndroid.content.Context, param1: string, param2: string): androidx.documentfile.provider.DocumentFile;
					public static findUniqueParents(param0: globalAndroid.content.Context, param1: java.util.Collection<string>): java.util.List<string>;
					public static getUsedSpace(param0: globalAndroid.content.Context, param1: string): number;
					public static createPictureWithMediaStoreFallback(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): globalAndroid.net.Uri;
					public static getRootRawFile(param0: globalAndroid.content.Context, param1: string, param2: boolean): java.io.File;
					public static fromSimplePath(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static fromFullPath(param0: globalAndroid.content.Context, param1: string, param2: com.anggrayudi.storage.file.DocumentFileType): androidx.documentfile.provider.DocumentFile;
					public static fromPublicFolder(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.file.PublicDirectory, param2: string, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static getFileNameFromUrl(param0: string): string;
					public static createFile(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): androidx.documentfile.provider.DocumentFile;
					public static getStorageId(param0: globalAndroid.content.Context, param1: string): string;
					public static delete(param0: globalAndroid.content.Context, param1: string): boolean;
					public static fromFile(param0: globalAndroid.content.Context, param1: java.io.File): androidx.documentfile.provider.DocumentFile;
					public static createDownloadWithMediaStoreFallback(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): globalAndroid.net.Uri;
					public getDirectorySequence$storage_release(param0: string): java.util.List<string>;
					public static fromPublicFolder(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.file.PublicDirectory): androidx.documentfile.provider.DocumentFile;
					public removeForbiddenCharsFromFilename$storage_release(param0: string): string;
					public static isStorageUriPermissionGranted(param0: globalAndroid.content.Context, param1: string, param2: string): boolean;
					public static getStorageIds(param0: globalAndroid.content.Context): java.util.List<string>;
					public static fromSimplePath(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.anggrayudi.storage.file.DocumentFileType, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static fromPublicFolder(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.file.PublicDirectory, param2: string): androidx.documentfile.provider.DocumentFile;
					public static fromSimplePath(param0: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static fromFullPath(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
					public static fromPublicFolder(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.file.PublicDirectory, param2: string, param3: boolean, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static fromFile(param0: globalAndroid.content.Context, param1: java.io.File, param2: com.anggrayudi.storage.file.DocumentFileType, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static findUniqueDeepestSubFolders(param0: globalAndroid.content.Context, param1: java.util.Collection<string>): java.util.List<string>;
					public static fromFile(param0: globalAndroid.content.Context, param1: java.io.File, param2: com.anggrayudi.storage.file.DocumentFileType, param3: boolean, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static fromSimplePath(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.anggrayudi.storage.file.DocumentFileType, param4: boolean, param5: boolean): androidx.documentfile.provider.DocumentFile;
					public static recreate(param0: globalAndroid.content.Context, param1: string, param2: string): androidx.documentfile.provider.DocumentFile;
					public static fromSimplePath(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.anggrayudi.storage.file.DocumentFileType): androidx.documentfile.provider.DocumentFile;
					public getFILE_NAME_DUPLICATION_REGEX_WITH_EXTENSION(): kotlin.text.Regex;
					public static buildSimplePath(param0: globalAndroid.content.Context, param1: string): string;
					public static fromSimplePath(param0: globalAndroid.content.Context, param1: string, param2: string): androidx.documentfile.provider.DocumentFile;
					public static fromFullPath(param0: globalAndroid.content.Context, param1: string, param2: com.anggrayudi.storage.file.DocumentFileType, param3: boolean, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static recreate(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: boolean): androidx.documentfile.provider.DocumentFile;
					public static recreate(param0: globalAndroid.content.Context, param1: string): androidx.documentfile.provider.DocumentFile;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class DocumentFileType {
					public static class: java.lang.Class<com.anggrayudi.storage.file.DocumentFileType>;
					public static ANY: com.anggrayudi.storage.file.DocumentFileType;
					public static FILE: com.anggrayudi.storage.file.DocumentFileType;
					public static FOLDER: com.anggrayudi.storage.file.DocumentFileType;
					public static values(): androidNative.Array<com.anggrayudi.storage.file.DocumentFileType>;
					public static valueOf(param0: string): com.anggrayudi.storage.file.DocumentFileType;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class DocumentFileUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.DocumentFileUtils>;
					public static inPrimaryStorage(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static moveFileToPictureMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback, param4: com.anggrayudi.storage.file.CreateMode): void;
					public static isMediaDocument(param0: androidx.documentfile.provider.DocumentFile): boolean;
					public static getRootDocumentFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static inInternalStorage(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static inDataStorage(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static getBasePath(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static moveFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.MediaFile, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static search(param0: androidx.documentfile.provider.DocumentFile, param1: boolean, param2: com.anggrayudi.storage.file.DocumentFileType): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static getStorageType(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): com.anggrayudi.storage.file.StorageType;
					public static autoIncrementFileName(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): string;
					public static isTreeDocumentFile(param0: androidx.documentfile.provider.DocumentFile): boolean;
					public static getSimplePath(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static isRootUriPermissionGranted(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static getRootDocumentFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): androidx.documentfile.provider.DocumentFile;
					public static getBaseName(param0: androidx.documentfile.provider.DocumentFile): string;
					public static makeFolder(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): androidx.documentfile.provider.DocumentFile;
					public static moveFileToDownloadMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback, param4: com.anggrayudi.storage.file.CreateMode): void;
					public static inSdCardStorage(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static makeFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): androidx.documentfile.provider.DocumentFile;
					public static makeFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: string, param4: com.anggrayudi.storage.file.CreateMode): androidx.documentfile.provider.DocumentFile;
					public static forceDelete(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): boolean;
					public static search(param0: androidx.documentfile.provider.DocumentFile, param1: boolean, param2: com.anggrayudi.storage.file.DocumentFileType, param3: androidNative.Array<string>, param4: string): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static toTreeDocumentFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static findFolder(param0: androidx.documentfile.provider.DocumentFile, param1: string): androidx.documentfile.provider.DocumentFile;
					public static getRootId(param0: androidx.documentfile.provider.DocumentFile): string;
					public static search(param0: androidx.documentfile.provider.DocumentFile): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static isExternalStorageDocument(param0: androidx.documentfile.provider.DocumentFile): boolean;
					public static getAbsolutePath(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static isWritable(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static child(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: boolean): androidx.documentfile.provider.DocumentFile;
					public static getRootPath(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static getId(param0: androidx.documentfile.provider.DocumentFile): string;
					public static toRawDocumentFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static inSameMountPointWith(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile): boolean;
					public static moveFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: java.io.File, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static quickFindTreeFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: globalAndroid.content.ContentResolver, param3: string): androidx.documentfile.provider.DocumentFile;
					public static copyFolderTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: boolean, param4: string, param5: com.anggrayudi.storage.callback.FolderCallback): void;
					public static getProperties(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.file.FileProperties.CalculationCallback): void;
					public static moveFileToPictureMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static toMediaFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): com.anggrayudi.storage.media.MediaFile;
					public static recreateFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static moveFolderTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: boolean, param4: string, param5: com.anggrayudi.storage.callback.FolderCallback): void;
					public static isRawFile(param0: androidx.documentfile.provider.DocumentFile): boolean;
					public static deleteRecursively(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): boolean;
					public static isEmpty(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static copyTo(param0: java.util.List<any>, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: boolean, param4: com.anggrayudi.storage.callback.MultipleFileCallback): void;
					public static forceDelete(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static checkRequirements(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean, param3: boolean): boolean;
					public static deleteRecursively(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static openOutputStream(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): java.io.OutputStream;
					public static isDownloadsDocument(param0: androidx.documentfile.provider.DocumentFile): boolean;
					public static shouldWritable(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): boolean;
					public static copyFileToPictureMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback, param4: com.anggrayudi.storage.file.CreateMode): void;
					public static moveFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static getMimeTypeByFileName(param0: androidx.documentfile.provider.DocumentFile): string;
					public static toFileCallbackErrorCode(param0: java.lang.Exception): com.anggrayudi.storage.callback.FileCallback.ErrorCode;
					public static copyFileToDownloadMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static getRelativePath(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static makeFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: string): androidx.documentfile.provider.DocumentFile;
					public static hasParent(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile): boolean;
					public static isReadOnly(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static moveTo(param0: java.util.List<any>, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: boolean, param4: com.anggrayudi.storage.callback.MultipleFileCallback): void;
					public static createBinaryFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): androidx.documentfile.provider.DocumentFile;
					public static findFileLiterally(param0: androidx.documentfile.provider.DocumentFile, param1: string): androidx.documentfile.provider.DocumentFile;
					public static moveFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static toRawFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): java.io.File;
					public static copyFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static copyFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.MediaFile, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static toWritableDownloadsDocumentFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static child(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): androidx.documentfile.provider.DocumentFile;
					public static getExtension(param0: androidx.documentfile.provider.DocumentFile): string;
					public static getFormattedSize(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static getFullName(param0: androidx.documentfile.provider.DocumentFile): string;
					public static openInputStream(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): java.io.InputStream;
					public static copyFileToPictureMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static openFileIntent(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string): globalAndroid.content.Intent;
					public static isExternalStorageManager(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static canModify(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static moveFileToDownloadMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback): void;
					public static quickFindRawFile(param0: androidx.documentfile.provider.DocumentFile, param1: string): androidx.documentfile.provider.DocumentFile;
					public static findFiles(param0: androidx.documentfile.provider.DocumentFile, param1: androidNative.Array<string>, param2: com.anggrayudi.storage.file.DocumentFileType): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static search(param0: androidx.documentfile.provider.DocumentFile, param1: boolean): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static createBinaryFile(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: com.anggrayudi.storage.file.CreateMode): androidx.documentfile.provider.DocumentFile;
					public static getMimeType(param0: androidx.documentfile.provider.DocumentFile): string;
					public static copyFileToDownloadMedia(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.callback.FileCallback, param4: com.anggrayudi.storage.file.CreateMode): void;
					public static deleteEmptyFolders(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): boolean;
					public static copyFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: androidx.documentfile.provider.DocumentFile, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static makeFolder(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: string, param3: com.anggrayudi.storage.file.CreateMode): androidx.documentfile.provider.DocumentFile;
					public static openOutputStream(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): java.io.OutputStream;
					public static takeIfWritable(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: boolean): androidx.documentfile.provider.DocumentFile;
					public static search(param0: androidx.documentfile.provider.DocumentFile, param1: boolean, param2: com.anggrayudi.storage.file.DocumentFileType, param3: androidNative.Array<string>, param4: string, param5: kotlin.text.Regex): java.util.List<androidx.documentfile.provider.DocumentFile>;
					public static copyFileTo(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context, param2: java.io.File, param3: com.anggrayudi.storage.media.FileDescription, param4: com.anggrayudi.storage.callback.FileCallback): void;
					public static getStorageId(param0: androidx.documentfile.provider.DocumentFile, param1: globalAndroid.content.Context): string;
					public static search(param0: androidx.documentfile.provider.DocumentFile, param1: boolean, param2: com.anggrayudi.storage.file.DocumentFileType, param3: androidNative.Array<string>): java.util.List<androidx.documentfile.provider.DocumentFile>;
				}
				export module DocumentFileUtils {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.file.DocumentFileUtils.WhenMappings>;
					}
					export module copyTo {
					export module WhenMappings {
						export class SourceInfo extends java.lang.Object {
							public static class: java.lang.Class<com.anggrayudi.storage.file.DocumentFileUtils.copyTo.SourceInfo>;
							public getSize(): number;
							public getConflictResolution(): com.anggrayudi.storage.callback.FolderCallback.ConflictResolution;
							public getChildren(): java.util.List<androidx.documentfile.provider.DocumentFile>;
							public constructor(param0: java.util.List<any>, param1: number, param2: number, param3: com.anggrayudi.storage.callback.FolderCallback.ConflictResolution);
							public getTotalFiles(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class FileProperties extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.FileProperties>;
					public getEmptyFolders(): number;
					public setSize(param0: number): void;
					public component2(): string;
					public setLastModified(param0: java.util.Date): void;
					public component3(): number;
					public getFolders(): number;
					public component7(): number;
					public getSize(): number;
					public isFolder(): boolean;
					public setLocation(param0: string): void;
					public toString(): string;
					public constructor();
					public getEmptyFiles(): number;
					public component8(): number;
					public setEmptyFiles(param0: number): void;
					public copy(param0: string, param1: string, param2: number, param3: boolean, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: java.util.Date): com.anggrayudi.storage.file.FileProperties;
					public setFolders(param0: number): void;
					public component9(): boolean;
					public hashCode(): number;
					public component5(): number;
					public getLocation(): string;
					public getFiles(): number;
					public setFiles(param0: number): void;
					public component10(): java.util.Date;
					public setFolder(param0: boolean): void;
					public constructor(param0: string, param1: string, param2: number, param3: boolean, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: java.util.Date);
					public formattedSize(param0: globalAndroid.content.Context): string;
					public setVirtual(param0: boolean): void;
					public getLastModified(): java.util.Date;
					public setName(param0: string): void;
					public setEmptyFolders(param0: number): void;
					public equals(param0: any): boolean;
					public component1(): string;
					public component6(): number;
					public getName(): string;
					public component4(): boolean;
					public isVirtual(): boolean;
				}
				export module FileProperties {
					export abstract class CalculationCallback extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.file.FileProperties.CalculationCallback>;
						public onError(): void;
						public constructor(param0: number, param1: kotlinx.coroutines.CoroutineScope);
						public setUiScope(param0: kotlinx.coroutines.CoroutineScope): void;
						public constructor();
						public getUpdateInterval(): number;
						public onComplete(param0: com.anggrayudi.storage.file.FileProperties): void;
						public getUiScope(): kotlinx.coroutines.CoroutineScope;
						public onUpdate(param0: com.anggrayudi.storage.file.FileProperties): void;
						public onCanceled(param0: com.anggrayudi.storage.file.FileProperties): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class FileSize extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.FileSize>;
					public static INSTANCE: com.anggrayudi.storage.file.FileSize;
					public static KB: number;
					public static MB: number;
					public static GB: number;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.FileUtils>;
					public static toDocumentFile(param0: java.io.File, param1: globalAndroid.content.Context): androidx.documentfile.provider.DocumentFile;
					public static makeFile(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: string): java.io.File;
					public static createNewFileIfPossible(param0: java.io.File): boolean;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: string): java.io.File;
					public static getRootPath(param0: java.io.File, param1: globalAndroid.content.Context): string;
					public static tryCreateNewFile(param0: java.io.File): boolean;
					public static isEmpty(param0: java.io.File): boolean;
					public static getRootRawFile(param0: java.io.File, param1: globalAndroid.content.Context, param2: boolean): java.io.File;
					public static makeFile(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: string, param4: com.anggrayudi.storage.file.CreateMode): java.io.File;
					public static autoIncrementFileName(param0: java.io.File, param1: string): string;
					public static inSameMountPointWith(param0: java.io.File, param1: globalAndroid.content.Context, param2: java.io.File): boolean;
					public static isReadOnly(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static makeFile(param0: java.io.File, param1: globalAndroid.content.Context, param2: string): java.io.File;
					public static getRootRawFile(param0: java.io.File, param1: globalAndroid.content.Context): java.io.File;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: java.io.File): java.io.File;
					public static child(param0: java.io.File, param1: string): java.io.File;
					public static getSimplePath(param0: java.io.File, param1: globalAndroid.content.Context): string;
					public static getInPrimaryStorage(param0: java.io.File): boolean;
					public static checkRequirements(param0: java.io.File, param1: globalAndroid.content.Context, param2: boolean, param3: boolean): boolean;
					public static getMimeType(param0: java.io.File): string;
					public static deleteEmptyFolders(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static getBasePath(param0: java.io.File, param1: globalAndroid.content.Context): string;
					public static shouldWritable(param0: java.io.File, param1: globalAndroid.content.Context, param2: boolean): boolean;
					public static takeIfWritable(param0: java.io.File, param1: globalAndroid.content.Context, param2: boolean): java.io.File;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: string): java.io.File;
					public static getStorageId(param0: java.io.File, param1: globalAndroid.content.Context): string;
					public static inSdCardStorage(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static forceDelete(param0: java.io.File, param1: boolean): boolean;
					public static makeFolder(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: com.anggrayudi.storage.file.CreateMode): java.io.File;
					public static getStorageType(param0: java.io.File, param1: globalAndroid.content.Context): com.anggrayudi.storage.file.StorageType;
					public static forceDelete(param0: java.io.File): boolean;
					public static getWritableDirs(param0: globalAndroid.content.Context): java.util.Set<java.io.File>;
					public static recreateFile(param0: java.io.File): boolean;
					public static makeFolder(param0: java.io.File, param1: globalAndroid.content.Context, param2: string): java.io.File;
					public static canModify(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static getDataDirectory(param0: globalAndroid.content.Context): java.io.File;
					public static isWritable(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static inDataStorage(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static isExternalStorageManager(param0: java.io.File, param1: globalAndroid.content.Context): boolean;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: string, param3: string, param4: com.anggrayudi.storage.callback.FileCallback.ConflictResolution): java.io.File;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: java.io.File, param3: string, param4: com.anggrayudi.storage.callback.FileCallback.ConflictResolution): java.io.File;
					public static moveTo(param0: java.io.File, param1: globalAndroid.content.Context, param2: java.io.File, param3: string): java.io.File;
				}
				export module FileUtils {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.file.FileUtils.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class MimeType extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.MimeType>;
					public static INSTANCE: com.anggrayudi.storage.file.MimeType;
					public static UNKNOWN: string;
					public static BINARY_FILE: string;
					public static IMAGE: string;
					public static AUDIO: string;
					public static VIDEO: string;
					public static TEXT: string;
					public static FONT: string;
					public static APPLICATION: string;
					public static CHEMICAL: string;
					public static MODEL: string;
					public static getExtensionFromMimeTypeOrFileName(param0: string, param1: string): string;
					public static getFullFileName(param0: string, param1: string): string;
					public static getExtensionFromMimeType(param0: string): string;
					public static getMimeTypeFromExtension(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class PublicDirectory {
					public static class: java.lang.Class<com.anggrayudi.storage.file.PublicDirectory>;
					public static DOWNLOADS: com.anggrayudi.storage.file.PublicDirectory;
					public static MUSIC: com.anggrayudi.storage.file.PublicDirectory;
					public static PODCASTS: com.anggrayudi.storage.file.PublicDirectory;
					public static RINGTONES: com.anggrayudi.storage.file.PublicDirectory;
					public static ALARMS: com.anggrayudi.storage.file.PublicDirectory;
					public static NOTIFICATIONS: com.anggrayudi.storage.file.PublicDirectory;
					public static PICTURES: com.anggrayudi.storage.file.PublicDirectory;
					public static MOVIES: com.anggrayudi.storage.file.PublicDirectory;
					public static DCIM: com.anggrayudi.storage.file.PublicDirectory;
					public static DOCUMENTS: com.anggrayudi.storage.file.PublicDirectory;
					public getFolderName(): string;
					public static valueOf(param0: string): com.anggrayudi.storage.file.PublicDirectory;
					public static values(): androidNative.Array<com.anggrayudi.storage.file.PublicDirectory>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class StorageId extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.file.StorageId>;
					public static INSTANCE: com.anggrayudi.storage.file.StorageId;
					public static PRIMARY: string;
					public static DATA: string;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module file {
				export class StorageType {
					public static class: java.lang.Class<com.anggrayudi.storage.file.StorageType>;
					public static Companion: com.anggrayudi.storage.file.StorageType.Companion;
					public static EXTERNAL: com.anggrayudi.storage.file.StorageType;
					public static DATA: com.anggrayudi.storage.file.StorageType;
					public static SD_CARD: com.anggrayudi.storage.file.StorageType;
					public static UNKNOWN: com.anggrayudi.storage.file.StorageType;
					public static valueOf(param0: string): com.anggrayudi.storage.file.StorageType;
					public static values(): androidNative.Array<com.anggrayudi.storage.file.StorageType>;
					public isExpected(param0: com.anggrayudi.storage.file.StorageType): boolean;
					public static fromStorageId(param0: string): com.anggrayudi.storage.file.StorageType;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export module StorageType {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.file.StorageType.Companion>;
						public fromStorageId(param0: string): com.anggrayudi.storage.file.StorageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class AudioMediaDirectory {
					public static class: java.lang.Class<com.anggrayudi.storage.media.AudioMediaDirectory>;
					public static MUSIC: com.anggrayudi.storage.media.AudioMediaDirectory;
					public static PODCASTS: com.anggrayudi.storage.media.AudioMediaDirectory;
					public static RINGTONES: com.anggrayudi.storage.media.AudioMediaDirectory;
					public static ALARMS: com.anggrayudi.storage.media.AudioMediaDirectory;
					public static NOTIFICATIONS: com.anggrayudi.storage.media.AudioMediaDirectory;
					public static valueOf(param0: string): com.anggrayudi.storage.media.AudioMediaDirectory;
					public static values(): androidNative.Array<com.anggrayudi.storage.media.AudioMediaDirectory>;
					public getFolderName(): string;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class FileDescription extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.media.FileDescription>;
					public component2(): string;
					public constructor(param0: string);
					public copy(param0: string, param1: string, param2: string): com.anggrayudi.storage.media.FileDescription;
					public component3(): string;
					public getFullName(): string;
					public getMimeType(): string;
					public setMimeType(param0: string): void;
					public setName(param0: string): void;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: string);
					public toString(): string;
					public component1(): string;
					public getName(): string;
					public setSubFolder(param0: string): void;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
					public getSubFolder(): string;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class ImageMediaDirectory {
					public static class: java.lang.Class<com.anggrayudi.storage.media.ImageMediaDirectory>;
					public static PICTURES: com.anggrayudi.storage.media.ImageMediaDirectory;
					public static DCIM: com.anggrayudi.storage.media.ImageMediaDirectory;
					public static valueOf(param0: string): com.anggrayudi.storage.media.ImageMediaDirectory;
					public static values(): androidNative.Array<com.anggrayudi.storage.media.ImageMediaDirectory>;
					public getFolderName(): string;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class MediaFile extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.media.MediaFile>;
					public getBasePath(): string;
					public getFormattedSize(): string;
					public isEmpty(): boolean;
					public getLength(): number;
					public getAbsolutePath(): string;
					public isPending(): boolean;
					public openFileIntent(param0: string): globalAndroid.content.Intent;
					public getMimeType(): string;
					public renameTo(param0: string): boolean;
					public getRelativePath(): string;
					public moveTo(param0: androidx.documentfile.provider.DocumentFile, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.callback.FileCallback): void;
					public toString(): string;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri);
					public openOutputStream(param0: boolean): java.io.OutputStream;
					/** @deprecated */
					public toRawFile(): java.io.File;
					public setAccessCallback(param0: com.anggrayudi.storage.media.MediaFile.AccessCallback): void;
					public toDocumentFile(): androidx.documentfile.provider.DocumentFile;
					public getExtension(): string;
					public delete(): boolean;
					public getType(): string;
					public hashCode(): number;
					public openInputStream(): java.io.InputStream;
					public openOutputStream(): java.io.OutputStream;
					public getFullName(): string;
					public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
					public copyTo(param0: androidx.documentfile.provider.DocumentFile, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.callback.FileCallback): void;
					public setLength(param0: number): void;
					public getOwner(): string;
					public setPending(param0: boolean): void;
					public moveTo(param0: string): boolean;
					public equals(param0: any): boolean;
					public getAccessCallback(): com.anggrayudi.storage.media.MediaFile.AccessCallback;
					public getName(): string;
					public isMine(): boolean;
					public getUri(): globalAndroid.net.Uri;
					public getExists(): boolean;
					public isRawFile(): boolean;
					public getBaseName(): string;
					public getLastModified(): number;
				}
				export module MediaFile {
					export class AccessCallback extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.media.MediaFile.AccessCallback>;
						/**
						 * Constructs a new instance of the com.anggrayudi.storage.media.MediaFile$AccessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onWriteAccessDenied(param0: com.anggrayudi.storage.media.MediaFile, param1: globalAndroid.content.IntentSender): void;
						});
						public constructor();
						public onWriteAccessDenied(param0: com.anggrayudi.storage.media.MediaFile, param1: globalAndroid.content.IntentSender): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class MediaStoreCompat extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.media.MediaStoreCompat>;
					public static INSTANCE: com.anggrayudi.storage.media.MediaStoreCompat;
					public static fromMediaId(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: string): com.anggrayudi.storage.media.MediaFile;
					public static fromRelativePath(param0: globalAndroid.content.Context, param1: string): java.util.List<com.anggrayudi.storage.media.MediaFile>;
					public static createDownload(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): com.anggrayudi.storage.media.MediaFile;
					public static createImage(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.ImageMediaDirectory, param3: com.anggrayudi.storage.file.CreateMode): com.anggrayudi.storage.media.MediaFile;
					public static createMedia(param0: globalAndroid.content.Context, param1: string, param2: com.anggrayudi.storage.media.FileDescription): com.anggrayudi.storage.media.MediaFile;
					public static createAudio(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.AudioMediaDirectory, param3: com.anggrayudi.storage.file.CreateMode): com.anggrayudi.storage.media.MediaFile;
					public static createMedia(param0: globalAndroid.content.Context, param1: string, param2: com.anggrayudi.storage.media.FileDescription, param3: com.anggrayudi.storage.file.CreateMode): com.anggrayudi.storage.media.MediaFile;
					public static fromFileName(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: string): com.anggrayudi.storage.media.MediaFile;
					public static createImage(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.ImageMediaDirectory): com.anggrayudi.storage.media.MediaFile;
					public static createAudio(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): com.anggrayudi.storage.media.MediaFile;
					public static createVideo(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): com.anggrayudi.storage.media.MediaFile;
					public static createVideo(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.VideoMediaDirectory, param3: com.anggrayudi.storage.file.CreateMode): com.anggrayudi.storage.media.MediaFile;
					public static createAudio(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.AudioMediaDirectory): com.anggrayudi.storage.media.MediaFile;
					public static fromRelativePath(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.file.PublicDirectory): java.util.List<com.anggrayudi.storage.media.MediaFile>;
					public static fromMediaId(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: number): com.anggrayudi.storage.media.MediaFile;
					public static fromMediaType(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType): java.util.List<com.anggrayudi.storage.media.MediaFile>;
					public static fromBasePath(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: string): com.anggrayudi.storage.media.MediaFile;
					public static createDownload(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.file.CreateMode): com.anggrayudi.storage.media.MediaFile;
					public static createImage(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription): com.anggrayudi.storage.media.MediaFile;
					public static getVolumeName(): string;
					public static fromRelativePath(param0: globalAndroid.content.Context, param1: string, param2: string): com.anggrayudi.storage.media.MediaFile;
					public static fromMimeType(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: string): java.util.List<com.anggrayudi.storage.media.MediaFile>;
					public static createVideo(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.FileDescription, param2: com.anggrayudi.storage.media.VideoMediaDirectory): com.anggrayudi.storage.media.MediaFile;
					public static fromFileNameContains(param0: globalAndroid.content.Context, param1: com.anggrayudi.storage.media.MediaType, param2: string): java.util.List<com.anggrayudi.storage.media.MediaFile>;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class MediaType {
					public static class: java.lang.Class<com.anggrayudi.storage.media.MediaType>;
					public static IMAGE: com.anggrayudi.storage.media.MediaType;
					public static AUDIO: com.anggrayudi.storage.media.MediaType;
					public static VIDEO: com.anggrayudi.storage.media.MediaType;
					public static DOWNLOADS: com.anggrayudi.storage.media.MediaType;
					public static values(): androidNative.Array<com.anggrayudi.storage.media.MediaType>;
					public getWriteUri(): globalAndroid.net.Uri;
					public static valueOf(param0: string): com.anggrayudi.storage.media.MediaType;
					public getDirectories(): java.util.List<java.io.File>;
					public getMimeType(): string;
					public getReadUri(): globalAndroid.net.Uri;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export module MediaType {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.media.MediaType.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module media {
				export class VideoMediaDirectory {
					public static class: java.lang.Class<com.anggrayudi.storage.media.VideoMediaDirectory>;
					public static MOVIES: com.anggrayudi.storage.media.VideoMediaDirectory;
					public static DCIM: com.anggrayudi.storage.media.VideoMediaDirectory;
					public static values(): androidNative.Array<com.anggrayudi.storage.media.VideoMediaDirectory>;
					public static valueOf(param0: string): com.anggrayudi.storage.media.VideoMediaDirectory;
					public getFolderName(): string;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class ActivityPermissionRequest extends java.lang.Object implements com.anggrayudi.storage.permission.PermissionRequest {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.ActivityPermissionRequest>;
					public check(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public continueToPermissionRequest(): void;
				}
				export module ActivityPermissionRequest {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.permission.ActivityPermissionRequest.Builder>;
						public check(): void;
						public constructor(param0: androidx.activity.ComponentActivity);
						public withCallback(param0: com.anggrayudi.storage.permission.PermissionCallback): com.anggrayudi.storage.permission.ActivityPermissionRequest.Builder;
						public withPermissions(param0: androidNative.Array<string>): com.anggrayudi.storage.permission.ActivityPermissionRequest.Builder;
						public constructor(param0: globalAndroid.app.Activity, param1: number);
						public build(): com.anggrayudi.storage.permission.ActivityPermissionRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class FragmentPermissionRequest extends java.lang.Object implements com.anggrayudi.storage.permission.PermissionRequest {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.FragmentPermissionRequest>;
					public check(): void;
					public continueToPermissionRequest(): void;
				}
				export module FragmentPermissionRequest {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.anggrayudi.storage.permission.FragmentPermissionRequest.Builder>;
						public constructor(param0: androidx.fragment.app.Fragment);
						public check(): void;
						public withCallback(param0: com.anggrayudi.storage.permission.PermissionCallback): com.anggrayudi.storage.permission.FragmentPermissionRequest.Builder;
						public withActivityOptions(param0: androidx.core.app.ActivityOptionsCompat): com.anggrayudi.storage.permission.FragmentPermissionRequest.Builder;
						public build(): com.anggrayudi.storage.permission.FragmentPermissionRequest;
						public withPermissions(param0: androidNative.Array<string>): com.anggrayudi.storage.permission.FragmentPermissionRequest.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class PermissionCallback extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.PermissionCallback>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.permission.PermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDisplayConsentDialog(param0: com.anggrayudi.storage.permission.PermissionRequest): void;
						onPermissionsChecked(param0: com.anggrayudi.storage.permission.PermissionResult, param1: boolean): void;
						onShouldRedirectToSystemSettings(param0: java.util.List<com.anggrayudi.storage.permission.PermissionReport>): void;
					});
					public constructor();
					public onDisplayConsentDialog(param0: com.anggrayudi.storage.permission.PermissionRequest): void;
					public onShouldRedirectToSystemSettings(param0: java.util.List<com.anggrayudi.storage.permission.PermissionReport>): void;
					public onPermissionsChecked(param0: com.anggrayudi.storage.permission.PermissionResult, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class PermissionReport extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.PermissionReport>;
					public constructor(param0: string, param1: boolean, param2: boolean);
					public getDeniedPermanently(): boolean;
					public isGranted(): boolean;
					public getPermission(): string;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class PermissionRequest extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.PermissionRequest>;
					/**
					 * Constructs a new instance of the com.anggrayudi.storage.permission.PermissionRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						check(): void;
						continueToPermissionRequest(): void;
					});
					public constructor();
					public check(): void;
					public continueToPermissionRequest(): void;
				}
			}
		}
	}
}

declare module com {
	export module anggrayudi {
		export module storage {
			export module permission {
				export class PermissionResult extends java.lang.Object {
					public static class: java.lang.Class<com.anggrayudi.storage.permission.PermissionResult>;
					public getPermissions(): java.util.List<com.anggrayudi.storage.permission.PermissionReport>;
					public constructor(param0: java.util.List<com.anggrayudi.storage.permission.PermissionReport>);
					public getAreAllPermissionsGranted(): boolean;
				}
			}
		}
	}
}

