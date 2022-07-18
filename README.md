# FormFill

![build](https://github.com/YuheiNakasaka/form-fill/workflows/build/badge.svg)

This is a Chrome Extension to fill html forms efficiently.

[Demo Form link](https://docs.google.com/forms/d/e/1FAIpQLSd1z-AY1R_cEkLPhqMBUQQfL4XqG6Jz1EWAUzRE1Sa5wk3iHg/viewform)

![form-fill-demo.gif](https://user-images.githubusercontent.com/1421093/179503211-843f5021-d517-431f-8529-eb61af81545a.gif)

## How to use

1. Download `release.zip`.
2. Extract `release.zip`.
3. Add the extracted `dist` folder into `chrome://extensions/`.

- [Releases](https://github.com/YuheiNakasaka/form-fill/tags)

## Form Data Format

### Field

- `formItems[]`: Forms(exp. Personal Informaion).
  - `id`: Random text. Not allowed to duplicate in the FormItems.
  - `name`: FormItem name.
  - `inputItems[]`: Form item's type, selector and value
    - `type`: text | radio | checkbox | select
    - `selector`: Any selector accepted in `document.querySelector(selector)`
    - `value`: string

### Example

```json
{
  "formItems": [
    {
      "id": "abcdefghij",
      "name": "Test Form",
      "inputItems": [
        {
          "type": "text",
          "selector": "#email_input_form",
          "value": "test@example.com"
        },
        {
          "type": "radio",
          "selector": "#subscription_radio_true",
          "value": "true"
        }
      ]
    }
  ]
}
```

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
