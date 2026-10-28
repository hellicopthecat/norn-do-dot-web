import Link from "next/link";

export default function GNB() {
  return (
    <nav>
      <ul className="grid grid-cols-5 border-2 divide-x-2 divide-solid *:flex *:justify-center">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <button>+</button>
        </li>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
      </ul>
    </nav>
  );
}
