interface ICheckBoxInputProps {
  id: string;
  checked: boolean;
  setChange: () => void;
}
export default function CheckboxInput({
  id,
  checked,
  setChange,
}: ICheckBoxInputProps) {
  return (
    <input
      id={id}
      className="grid place-items-center w-5 h-5 rounded-full appearance-none border border-sky-300 bg-black/25 checked:border-blue-500 checked:bg-blue-800 checked:before:content-[''] checked:before:w-1 checked:before:h-1 checked:before:bg-slate-300 checked:before:rounded-full"
      type="checkbox"
      checked={checked}
      onChange={setChange}
    />
  );
}
