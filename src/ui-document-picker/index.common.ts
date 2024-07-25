export interface CommonPickerPermissionsOptions {
    read?: boolean;
    write?: boolean;
    persistable?: boolean;
    recursive?: boolean;
}
export interface CommonPickerOptions {
    multipleSelection?: boolean;
    startingFolder?: string;
    permissions?: CommonPickerPermissionsOptions;
    cloud?: boolean;
    forceSAF?: boolean;
}
export interface FilePickerOptions extends CommonPickerOptions {
    extensions?: string[]; // will be transformed to mimeTypes on android
    mimeTypes?: string[]; // will be passed directly on android
    documentTypes?: string[]; // will be passed directly on ios
    pickerMode?: number;
}
export interface FolderPickerOptions extends CommonPickerOptions {}

export interface SaveFileOptions extends Pick<CommonPickerOptions, 'forceSAF'>, Pick<CommonPickerOptions, 'permissions'> {
    name: string;
    data;
    mimeType?: string;
}
