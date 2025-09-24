# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.27](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.26...v1.1.27) (2025-09-24)

### Bug Fixes

* **ios:** pickFolder allow write on iOS > 14 ([c4c812f](https://github.com/nativescript-community/ui-document-picker/commit/c4c812fc19d372f69df9c8a77b6de4b667d8f73a))

## [1.1.26](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.25...v1.1.26) (2024-10-14)

### Bug Fixes

* **android:** native getPath method fix (handle more SAF cases) ([c415753](https://github.com/nativescript-community/ui-document-picker/commit/c41575393ac6f0f893b5b3611b19a555aee23393))

## [1.1.25](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.24...v1.1.25) (2024-09-09)

### Bug Fixes

* **ios:** trying to fix issue when the UTType identifier is passed directly. ([a751ba9](https://github.com/nativescript-community/ui-document-picker/commit/a751ba986d5cfe522ad4efca549c301ad77be470))

## [1.1.24](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.23...v1.1.24) (2024-07-25)

### Bug Fixes

* **ios:** decodeURI in result to prevent wrong path ([41b7e93](https://github.com/nativescript-community/ui-document-picker/commit/41b7e93aef116dd78850d8640c969f7489b173f8))

## [1.1.23](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.22...v1.1.23) (2024-07-25)

### Features

* **ios:** pickFolder support ([2bfcafd](https://github.com/nativescript-community/ui-document-picker/commit/2bfcafde3106126e21652fa019d72b417ca1d376))

### Bug Fixes

* new startingFolder option ([1a2c3c8](https://github.com/nativescript-community/ui-document-picker/commit/1a2c3c86c392f752071afccbac4d57cf21927bad))

## [1.1.22](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.21...v1.1.22) (2024-07-03)

### Bug Fixes

* **android:** prevent error while using content:// file path ([2ee2b45](https://github.com/nativescript-community/ui-document-picker/commit/2ee2b45d7cea6ceb7a2c0d14d1d91b6879403268))

## [1.1.21](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.20...v1.1.21) (2024-06-25)

### Bug Fixes

* **ios:** `saveFile` and `openFilePicker` fixes ([648b8ca](https://github.com/nativescript-community/ui-document-picker/commit/648b8ca8971180dfbb56f890b3e005d6198370af))

## [1.1.20](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.19...v1.1.20) (2024-06-14)

### Bug Fixes

* **android:** regression fix ([55e3019](https://github.com/nativescript-community/ui-document-picker/commit/55e30196801ec0a8648bc778ed1ed47b0c0d68ee))

## [1.1.19](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.18...v1.1.19) (2024-06-14)

### Bug Fixes

* **android:** new param `forceSAF` to always use SAF (and remove the need for storage permission) ([9a23f04](https://github.com/nativescript-community/ui-document-picker/commit/9a23f042deb482d6f04f6c8827afdab8fe5c766a))

## [1.1.18](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.17...v1.1.18) (2024-04-07)

### Bug Fixes

* **android:** persistable permission not persisted upon reboot ([e9b1b0b](https://github.com/nativescript-community/ui-document-picker/commit/e9b1b0b32a1cfaa4a06c36be13b016b05c81aebc))

## [1.1.17](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.16...v1.1.17) (2024-01-14)

### Bug Fixes

* **ios:** rollback for now ([748f455](https://github.com/nativescript-community/ui-document-picker/commit/748f45503c6c883f3bfc6104939371ee7372339c))

## [1.1.16](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.15...v1.1.16) (2024-01-14)

### Bug Fixes

* **ios:** trying to fix `extensions` not being recognized ([45ba2cc](https://github.com/nativescript-community/ui-document-picker/commit/45ba2cc79b21cc9880f5e1eb5c9ad939e6210f32))

## [1.1.15](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.14...v1.1.15) (2023-12-23)

### Bug Fixes

* **android:** native-api-usage ([a87fa8e](https://github.com/nativescript-community/ui-document-picker/commit/a87fa8e71dafac822644eb69559ba5b9a9257fae))
* **android:** removed logging and refactor ([c83a06d](https://github.com/nativescript-community/ui-document-picker/commit/c83a06da2d3903635f759715cb92f8dbe44e2184))

## [1.1.14](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.13...v1.1.14) (2023-12-15)

### Bug Fixes

* **android:** multiple extensions fix ([9d0f0b8](https://github.com/nativescript-community/ui-document-picker/commit/9d0f0b86dded175f51ad31c63931ad784395a787))

### Features

* new `mimeTypes` and `documentTypes` to pass them directly to iOS and Android (without trying to figure out from `extensions`) ([5405704](https://github.com/nativescript-community/ui-document-picker/commit/5405704b051add12907146f99f1c124d8ad1e7fd))

## [1.1.13](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.12...v1.1.13) (2023-10-24)

### Features

* saveFile method ([895c4f9](https://github.com/nativescript-community/ui-document-picker/commit/895c4f9964b661f7e73632a9424280561565939c))

## [1.1.12](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.11...v1.1.12) (2022-02-18)

### Bug Fixes

* **ios:** allow no param + default to all files ([6304099](https://github.com/nativescript-community/ui-document-picker/commit/6304099cf5c29c2b25bd19f2a35d97390ad716cf))

## [1.1.11](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.10...v1.1.11) (2022-02-16)

### Bug Fixes

* missing dependency ([203fb9e](https://github.com/nativescript-community/ui-document-picker/commit/203fb9e46c7f6c526ff67c50ff8f60d842bd097e))

## [1.1.10](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.9...v1.1.10) (2022-02-16)

### Bug Fixes

* **android:** removed unused dependency ([448d753](https://github.com/nativescript-community/ui-document-picker/commit/448d75379ce7c25d6faba64b2a4a320b4f5e058c))

## [1.1.9](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.8...v1.1.9) (2022-01-29)

### Bug Fixes

* **android:** fixed path on some devices ([97881c8](https://github.com/nativescript-community/ui-document-picker/commit/97881c808dee5fb4f78339e2562482554dbe3bc4))
* **android:** remove `MANAGE_EXTERNAL_STORAGE` as it prevents app release ([564a5b3](https://github.com/nativescript-community/ui-document-picker/commit/564a5b3706c9bdd2ba9be963e77b7f03bd5f6eb4))
* demo snippets package json ([66e0faf](https://github.com/nativescript-community/ui-document-picker/commit/66e0fafb85037956c81a85e891b53a7291f3aaa2))
* minSdkVersion for demo ([02d4bc8](https://github.com/nativescript-community/ui-document-picker/commit/02d4bc821c93f7326d9ffc4136528220ad7c711a))

## [1.1.8](https://github.com/nativescript-community/ui-document-picker/compare/v13.0.32...v1.1.8) (2021-12-03)

### Bug Fixes

* package version ([9e52a0d](https://github.com/nativescript-community/ui-document-picker/commit/9e52a0ddec67b47a369efbf422731388681e2965))

## [13.0.32](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.7...v13.0.32) (2021-12-03)

### Bug Fixes

* **android:** add basic support for android scope storage ([c9de628](https://github.com/nativescript-community/ui-document-picker/commit/c9de6286140c602fceeed4f9aaf635c8b29b41f9))

## [1.1.7](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.6...v1.1.7) (2021-08-25)

**Note:** Version bump only for package @nativescript-community/ui-document-picker

## [1.1.6](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.5...v1.1.6) (2021-06-28)

### Reverts

* Revert "v1.1.6" ([ef0be58](https://github.com/nativescript-community/ui-document-picker/commit/ef0be58589aa75a6be4a85b2837b6f968c341b08))

## [1.1.5](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.4...v1.1.5) (2021-05-19)

**Note:** Version bump only for package @nativescript-community/ui-document-picker

## [1.1.4](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.3...v1.1.4) (2021-05-04)

**Note:** Version bump only for package @nativescript-community/ui-document-picker

## [1.1.3](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.2...v1.1.3) (2020-11-02)

**Note:** Version bump only for package @nativescript-community/ui-document-picker

## [1.1.2](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.1...v1.1.2) (2020-10-13)

### Bug Fixes

* android error fix ([d0952f9](https://github.com/nativescript-community/ui-document-picker/commit/d0952f9f73a65e5500a598d0d1374e7020485120))

## [1.1.1](https://github.com/nativescript-community/ui-document-picker/compare/v1.1.0...v1.1.1) (2020-09-17)

### Bug Fixes

* **android:** build fix ([6d6495f](https://github.com/nativescript-community/ui-document-picker/commit/6d6495f8cbbd81f55773d74aae0fa0da0480dc21))

# 1.1.0 (2020-09-06)

### Bug Fixes

* cleanup logs ([9b35fa9](https://github.com/nativescript-community/ui-document-picker/commit/9b35fa97f115852ea53b554e8fec32489dcee2d7))
* ios cancel should not reject ([9d1d942](https://github.com/nativescript-community/ui-document-picker/commit/9d1d942a0fcfa51c031142df5b487bdb4ef6e57c))

### Features

* N7 and new plugin name ([1b9c4ab](https://github.com/nativescript-community/ui-document-picker/commit/1b9c4abf4eb1c64c8cee565f7a4ae08319718e3a))
