export type FormItem = {
  id: string;
  name: string;
  url: string;
  inputItems: InputItem[];
};

export type InputItem = {
  type: string;
  selector: string;
  value: string;
};
