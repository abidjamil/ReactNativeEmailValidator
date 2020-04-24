### Regex Based Email Validator for React Native


## Run this example 

- clone this repository
- install the npm dependencies by npm install, npm install react-native-cli'
- create local.properties file in android folder and define sdk path like sdk.dir= C\:\\android\\sdk

#### Run on Emulator
`react-native run-android`

# Installation

For react native project..

```sh
$ npm install aj-email-validator
```

# Usage
For react native project follow the following steps
### 1) Import Library
```sh
import EmailValidator from 'aj-email-validator'
```
### 2) Call the function by passing
```sh
if ( EmailValidator(emailString) == true ) {
    alert('Email is Valid')
}
else{
    alert('Email is not Valid')
}
```


