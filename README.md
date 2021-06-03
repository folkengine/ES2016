# ES2016

## Dev Dependencies

* [Mocha](https://mochajs.org/)
  * [Chai Assertion Library](https://www.chaijs.com/)
  * [Karma](https://karma-runner.github.io/latest/index.html)
* [ESLint](https://eslint.org/)
  * [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
  * [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)
* [microbundle](https://github.com/developit/microbundle)

## Inspiration

* [David Else > Why you don't need Babel](https://blog.logrocket.com/why-you-dont-need-babel/)
* [Create and Publish a Universal JavaScript Module](https://medium.com/@vbabak/create-and-publish-a-universal-javascript-module-1028bc32ce40)
* [gr2m/node-bin-example](https://github.com/gr2m/node-bin-example)

## Setup

Configure ESLint to automatically in the current project:
`Settings/Preferences` > `Languages and Frameworks` > `JavaScript` >
`Code Quality Tools` > `ESLint` > `Automatic ESLint configuration`

## Script

```
$ npm install --save-dev mocha chai
$ npm install --save-dev eslint eslint-plugin-compat eslint-plugin-mocha eslint-config-airbnb-base
$ npm i --save-dev karma karma-mocha karma-chai
$ npm i --save-dev karma-chrome-launcher karma-firefox-launcher
```
