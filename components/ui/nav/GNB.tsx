"use client";
import {
  IconCalendar,
  IconLayoutDashboard,
  IconListSearch,
  IconSquareRoundedPlus,
  IconUser,
} from "@tabler/icons-react";
import AppBarItem from "../appbar/AppBarItem";
import {usePathname} from "next/navigation";

export default function GNB() {
  const path = usePathname();

  if (path !== "/") {
    return null;
  }

  return (
    <nav className="sticky bottom-5 w-full z-10">
      <ul className="bg-black grid  grid-cols-5 rounded-full divide-x-2 divide-solid *:flex *:justify-center *:p-2">
        <AppBarItem href="/" icon={<IconListSearch />} badgeTxt="루틴리스트" />
        <AppBarItem href="/" icon={<IconCalendar />} badgeTxt="달력" />
        <AppBarItem
          href="/"
          icon={<IconSquareRoundedPlus />}
          badgeTxt="루틴추가"
        />
        <AppBarItem
          href="/"
          icon={<IconLayoutDashboard />}
          badgeTxt="포모도로"
        />
        <AppBarItem href="/" icon={<IconUser />} badgeTxt="유저" />
      </ul>
    </nav>
  );
}
