import { FilePickerOptions } from './index.common';

export { FilePickerOptions };
export function openFilePicker(params: FilePickerOptions): Promise<{ files: string[]; ios?; android? }>;
