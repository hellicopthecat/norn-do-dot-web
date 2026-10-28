import {ChangeEventHandler} from "react";

interface ITxtInput {
  id: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function TxtInput({
  id,
  value,
  placeholder,
  onChange,
  ...args
}: ITxtInput) {
  return (
    <input
      id={id}
      className={`border border-slate-300 px-2 py-1 rounded-lg w-full`}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...args}
    />
  );
}
