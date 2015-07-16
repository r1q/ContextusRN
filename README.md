# ContextusRN
[React Native](https://facebook.github.io/react-native/) iOS app for [Contextus.com](http://contextus.com) built with [Parse](http://parse.com).

###Parse.com Data Structure
```
.
├── Feeds
│   ├── objectId <String>
│   ├── createdAt <Date>
│   ├── updatedAt <Date>
│   ├── ACL <ACL>
│   ├── name <String>
│   ├── url <String>
│   └── avatar <String>
├── Posts
│   ├── objectId <String>
│   ├── createdAt <Date>
│   ├── updatedAt <Date>
│   ├── ACL <ACL>
│   ├── author <Pointer> (to parent feed)
│   ├── avatar <String>
│   ├── image <String>
│   ├── publishedAt <Date>
│   └── score <Number>
└── Users
```

### Getting Started
Just [clone](github-windows://openRepo/https://github.com/palmdeezy/ContextusRN) or
[fork](https://github.com/palmdeezy/ContextusRN/fork) the repo and start hacking:

```shell
$ git clone -o contextus-react-native -b master --single-branch \
      https://github.com/palmdeezy/ContextusRN.git MyApp
$ cd MyApp
$ npm install                   # Install Node.js components listed in ./package.json
```

Create an account on [Parse.com](http://parse.com) and create a new app.

Open `/MyApp/App/` and create a file called `config.js`. Enter your Parse.com App ID and Javascript Key. 

```javascript
module.exports = {
  APP_ID: 'xxxxxxx',            // Parse.com App ID
  JS_KEY: 'xxxxxxx'             // Parse.com Javascript Key
};
```
###How to Run
Open MyApp in Xcode and press run. 

###How to Run on device
Refer to React Native [documentation](https://facebook.github.io/react-native/docs/runningondevice.html#content) 

###Reference Docs
  - [React Native](https://facebook.github.io/react-native/)
  - [React.js](http://facebook.github.io/react/)

###Copyright

Source code is licensed under the MIT License (MIT). See LICENSE.txt file in the project root. Documentation to the project is licensed under the CC BY 4.0 license. React logo, React Native logo, and Parse.com image are trademarks of Facebook, Inc.
