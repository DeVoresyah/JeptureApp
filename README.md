<center>#  Jepture - A Static App
Jepture is a simple static react native app

[![MIT License][license-image]][license-url] [![Stars][stars-image]][stars-url] [![js-standard-style][js-standard][js-standard-url] [![React Native][package-react-native]][react-native-url]</center>

## Prerequisites
- Xcode or Android Studio installed and exported on your ~/.bash_profile or similar
- JDK 1.8
- Node >= 10.*
- react-native-cli

## Installation
open terminal and change directory to your desired folder, then:
```
$ git clone git@github.com:DeVoresyah/JeptureApp.git YourAppName
$ cd YourAppName
$ npm install
$ npm run rm-git && npm run androidx
```
## Running Your App
after installation complete, follow this command:
```
$ react-native run-android
or
$ react-native run-ios
```

## License
The code is available at [GitHub][home] under the [MIT license][license-url].

## Support Me
I really appreciate if you want support me by donating some $ or hire me on your company/project. You can contact me via :
- [Facebook][facebook]
- [Instagram][instagram]
- [Linkedin][linkedin]

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

[home]: https://github.com/DeVoresyah/ZStore
[facebook]: https://facebook.com/DeVoresyah
[instagram]: https://instagram.com/devoresyah
[linkedin]: https://linkedin.com/in/devoresyah

[license-image]: https://img.shields.io/github/license/DeVoresyah/JeptureApp.svg?style=flat
[license-url]: LICENSE

[stars-image]: https://img.shields.io/github/stars/DeVoresyah/JeptureApp.svg?style=flat
[stars-url]: https://github.com/DeVoresyah/JeptureApp/stargazers

[js-standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[js-standard-url]: http://standardjs.com/

[package-react-native]: https://img.shields.io/badge/react--native-0.59.9-blue.svg?style=flat
[react-native-url]: https://github.com/facebook/react-native