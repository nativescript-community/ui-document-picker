<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Picker Demo" />
        </ActionBar>

        <StackLayout class="page">
            <Button text="Pick Document" @tap="pickDocument" />
        </StackLayout>
    </Page>
</template>

<script>
import { openFilePicker } from '@nativescript-community/ui-document-picker';
import { File, knownFolders } from '@nativescript/core';
import { android as androidApplication } from '@nativescript/core/application';

function readTextFromUri( filePath)  {
    const stringBuilder = new java.lang.StringBuilder();
    const inputStream = androidApplication.context.getContentResolver().openInputStream(android.net.Uri.parse(filePath));
        const reader = new java.io.BufferedReader(new java.io.InputStreamReader(Objects.requireNonNull(inputStream)));
    let line;
    while ((line = reader.readLine()) != null) {
        stringBuilder.append(line);
    }
    return stringBuilder.toString();
}
export default {
    mounted() {
        console.log('mounted')
        const appFolder = knownFolders.currentApp();
        const testFile = appFolder.getFile('test.txt');
        console.log(testFile.path, File.exists(testFile.path), testFile.readTextSync());
        // const testFile2 = File.fromPath('~/test.txt');
        // console.log(testFile2.path, File.exists(testFile2.path));
    },
    methods: {
        async pickDocument() {

        try {
            
            const files  = await openFilePicker({
                // extensions:['xml']
            });
            console.log('files', files, knownFolders.currentApp())
            console.log('test',File.fromPath(files.files[0]))
            // console.log('test2',readTextFromUri(files.files[0]))
            console.log('test2',File.fromPath(files.files[0]).readTextSync())
        } catch (error) {
            console.error(error)
        }
        }
    }
};
</script>

<style lang="scss" scoped>

.page Label {
    font-size: 35;
    horizontal-alignment: center;
    vertical-alignment: center;
    color: #ffffff;
    text-transform: uppercase;
}

</style>