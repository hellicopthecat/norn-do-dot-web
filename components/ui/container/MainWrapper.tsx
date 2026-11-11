import {ReactNode} from "react";

export default function MainWrapper({children}: {children: ReactNode}) {
  return <main className="w-full h-full flex flex-col">{children}</main>;
}
