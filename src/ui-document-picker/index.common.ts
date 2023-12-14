export interface CommonPickerOptions {
    multipleSelection?: boolean;
    permissions?: {
        read?: boolean;
        write?: boolean;
        persistable?: boolean;
        recursive?: boolean;
    };
    cloud?: boolean;
}
export interface FilePickerOptions extends CommonPickerOptions {
    extensions?: string[]; // will be transformed to mimeTypes on android
    mimeTypes?: string[];// will be passed directly on android
    documentTypes?: string[];// will be passed directly on ios
    pickerMode?: number;
}
export interface FolderPickerOptions extends CommonPickerOptions {}

export interface SaveFileOptions extends Pick<CommonPickerOptions, 'permissions'> {
    name: string;
    data;
    mimeType?: string;
}
