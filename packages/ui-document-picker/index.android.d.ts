import { FilePickerOptions } from './index.common';
export { FilePickerOptions };
export declare function openFilePicker(params: FilePickerOptions): Promise<{
    files: any[];
    android: globalAndroid.net.Uri;
} | {
    files: string[];
    android: globalAndroid.content.ClipData;
} | {
    files: any[];
    android?: undefined;
}>;
