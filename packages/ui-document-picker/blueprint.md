{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

## Configuration

Add any other additional configuration instructions here.

## API

There is one function exported:

```typescript
export interface FilePickerOptions {
    extensions: string[];
    multipleSelection?: boolean;
    pickerMode?: number; //iOS only
}

export function openFilePicker(params: FilePickerOptions): Promise<{ files: string[]; ios?: NSURL; android?: android.net.Uri }>;
```

### Vue

### Examples

- [Picker Demo](demo-snippets/vue/Demo.vue)
  - A very basic picker demo.

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}