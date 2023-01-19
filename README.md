# i18next Capacitor Language Detector

This plugin caches your user's language in [@capacitor/references](https://github.com/ionic-team/capacitor-plugins/tree/main/preferences).

Stole most code from [i18next-react-native-async-storage](https://github.com/0xClpz/i18next-react-native-async-storage).

## Getting Started

Install using:
```Bash
npm i i18next-capacitor-language-detector
```

Then pass it to your i18n instance
```JavaScript
import LanguageDetector from "i18next-capacitor-language-detector"

i18n.use(LanguageDetector());
```

## Fallback mechanism

You can pass a fallback function or language to the plugin in case it fails to find the user's language in the local storage (typically on the app's first run):

```JavaScript
// With a fallback language
i18n.use(LanguageDetector('en'))

// With a fallback function
const detectUserLanguage = (callback) => {
  return Expo
    .DangerZone
    .Localization
    .getCurrentLocaleAsync()
    .then(lng => { callback(lng.replace('_', '-')); })
}

/*
const detectUserLanguage = () => {	
  return navigator.language;
}
*/

i18n.use(LanguageDetector(detectUserLanguage))
```
