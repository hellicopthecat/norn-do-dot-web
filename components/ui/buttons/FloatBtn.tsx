import {ReactNode} from "react";

interface IFloatBtnProps {
  x: string;
  y: string;
  bgColor: string;
  children: ReactNode;
}
export default function FloatBtn({x, y, bgColor, children}: IFloatBtnProps) {
  return (
    <button
      className={`absolute ${x} ${y} ${bgColor} p-5 rounded-full size-10 truncate flex-center`}
    >
      {children}
    </button>
  );
}
