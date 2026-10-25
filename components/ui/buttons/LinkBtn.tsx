import Link from "next/link";

export default function LinkBtn({link, label}: {link: string; label: string}) {
  return <Link href={link}>{label}</Link>;
}
