// Facts below were read from the supplied APK (MjPdfReader_5804.apk) by inspecting
// AndroidManifest.xml, the lib/ folder and the signing block. Re-run that inspection
// whenever the file in /public/downloads is replaced.
export const APK = {
  path: '/downloads/mj-pdf-3.1.0.apk',
  fileName: 'mj-pdf-3.1.0.apk',
  packageName: 'com.gitlab.mudlej.MjPdfReader',
  versionName: '3.1.0',
  versionCode: 5804,
  minSdk: 23,
  minAndroid: 'Android 6.0 (API 23)',
  targetSdk: 36,
  sizeBytes: 9083705,
  sizeLabel: '8.66 MB',
  sha256: '026d0a38638f2680f75f30b40720eb9fa71e823f6e3d6b4812aff313a9fdaf98',
  // IMPORTANT: the supplied build only contains lib/x86_64 native libraries.
  abis: ['x86_64'],
  abiNote:
    'This file is an x86_64 build (emulators, Chromebooks, some x86 tablets). It does not include ARM libraries, so it will not install on typical ARM phones. Phone users should use F-Droid or IzzyOnDroid.',
  signer: 'F-Droid build key (CN=FDroid)',
  license: 'GPL-3.0',
  permissions: [
    ['READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE (up to API 29)', 'Open and save PDFs on older Android versions.'],
    ['MANAGE_EXTERNAL_STORAGE', 'All-files access, used for browsing folders and scanning your device for PDFs.'],
    ['INTERNET / ACCESS_NETWORK_STATE', 'Opening PDFs from a web address.'],
    ['WAKE_LOCK / FOREGROUND_SERVICE', 'Keeps background work such as scanning alive.'],
    ['RECEIVE_BOOT_COMPLETED', 'Declared by the background-work library bundled in the app.'],
  ] as [string, string][],
};
