export const jsonExample: string = JSON.stringify({
  formItems: [
    {
      id: "00000001",
      name: "Google Form Sample",
      inputItems: [
        {
          type: "text",
          selector: "input[type='email']",
          value: "test@example.com",
        },
        {
          type: "radio",
          selector: "#i12",
          value: "true",
        },
        {
          type: "checkbox",
          selector: "#i26",
          value: "true",
        },
        {
          type: "select",
          selector: "[role='option'][data-value='選択肢 1']",
          value: "true",
        },
        {
          type: "select",
          selector: "[role='option'][data-value='選択肢 1']",
          value: "true",
        },
        {
          type: "radio",
          selector: ".T5pZmf [data-value='1']",
          value: "true",
        },
        {
          type: "radio",
          selector:
            "[aria-describedby='i41 i42'] [data-field-index='0'][data-value='普通']",
          value: "true",
        },
        {
          type: "radio",
          selector:
            "[aria-describedby='i41 i42'] [data-field-index='1'][data-value='良かった']",
          value: "true",
        },
        {
          type: "radio",
          selector:
            "[aria-describedby='i41 i42'] [data-field-index='2'][data-value='悪い']",
          value: "true",
        },
        {
          type: "checkbox",
          selector:
            "[aria-labelledby='i44'] [data-field-index='0'][data-answer-value='魚料理']",
          value: "true",
        },
        {
          type: "checkbox",
          selector:
            "[aria-labelledby='i44'] [data-field-index='0'][data-answer-value='肉料理']",
          value: "true",
        },
        {
          type: "checkbox",
          selector:
            "[aria-labelledby='i44'] [data-field-index='1'][data-answer-value='魚料理']",
          value: "true",
        },
        {
          type: "checkbox",
          selector:
            "[aria-labelledby='i44'] [data-field-index='2'][data-answer-value='デザート']",
          value: "true",
        },
      ],
    },
  ],
});
