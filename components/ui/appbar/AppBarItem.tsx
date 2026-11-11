import Link from "next/link";
import HelpBadge from "../badge/HelpBadge";
import {ReactNode} from "react";
interface IAppBarItemProps {
  href: string;
  icon: ReactNode;
  badgeTxt: string;
}
export default function AppBarItem({href, icon, badgeTxt}: IAppBarItemProps) {
  return (
    <li>
      <Link href={href} className="group flex-center bg-black w-full h-full">
        <div className="bg-black min-w-full z-9 flex-center py-1">{icon}</div>
        <HelpBadge value={badgeTxt} />
      </Link>
    </li>
  );
}
