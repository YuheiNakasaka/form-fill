# FormFill

![build](https://github.com/YuheiNakasaka/form-fill/workflows/build/badge.svg)

## Form Data Format

### Field

- `formItems[]`: Forms(exp. Personal Informaion).
  - `id`: Random text. Not allowed to duplicate in the FormItems.
  - `name`: FormItem name.
  - `inputItems[]`: Form item's type, selector and value
    - `type`: text | radio | checkbox | select
    - `selector`: Any selector of accepted in `document.querySelector(selector)`
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
