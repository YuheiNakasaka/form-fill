# FormFill

![build](https://github.com/YuheiNakasaka/form-fill/workflows/build/badge.svg)

## TODO

- [x] フォーム入力情報を JSON で設定する
  - [x] フォーム入力情報は複数持つことができる
  - [x] CRUD ができる
- [x] 設定された JSON から特定のタブのフォームに入力する
- [ ] JSON は export/import ができる

## Prerequisites

- [node + npm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

```
npm install
```

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test

`npx jest` or `npm run test`
