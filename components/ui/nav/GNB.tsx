import Link from "next/link";

export default function GNB() {
  return (
    <nav>
      <ul>
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
