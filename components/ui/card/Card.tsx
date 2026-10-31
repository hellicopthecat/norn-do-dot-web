import {ReactNode} from "react";

interface ICardProps {
  children: ReactNode;
}
export default function Card({children}: ICardProps) {
  return (
    <article className="border border-white/75 rounded-sm">
      <div className="bg-(--glass-bg) p-3 backdrop-blur-md ">{children}</div>
    </article>
  );
}
