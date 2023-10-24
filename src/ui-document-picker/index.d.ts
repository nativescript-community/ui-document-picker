import { FilePickerOptions, FolderPickerOptions, SaveFileOptions } from './index.common';

export { FilePickerOptions, FolderPickerOptions };
export function openFilePicker(params?: FilePickerOptions): Promise<{ files: string[]; ios?; android? }>;
export function pickFolder(params?: FolderPickerOptions): Promise<{ folders: string[]; ios?; android? }>;
export function saveFile(params: SaveFileOptions): Promise<boolean>;
