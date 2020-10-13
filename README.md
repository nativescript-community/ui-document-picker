# NativeScript document picker plugin

## Installation

From the command prompt go to your app's root folder and execute:

```
tns plugin add @nativescript-community/ui-document-picker
```

## API

only one function exported

```typescript
export interface FilePickerOptions {
    extensions: string[];
    multipleSelection?: boolean;
    pickerMode?: number;
}
export function openFilePicker(params: FilePickerOptions): Promise<{ files: string[]; ios?: NSURL; android?: android.net.Uri }>;
```
