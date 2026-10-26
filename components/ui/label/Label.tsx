interface ILabelProps {
  /** Input과 연결 ID 값 */
  idFor: string;
  /** 라벨의 값 */
  value: string;
}
export default function Label({value, idFor, ...ars}: ILabelProps) {
  return (
    <label htmlFor={idFor} {...ars}>
      {value}
    </label>
  );
}
