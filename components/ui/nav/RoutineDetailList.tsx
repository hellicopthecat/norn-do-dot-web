import Link from "next/link";

interface IRoutineDetailListProps {
  routineDetail: {id: number; value: string}[];
}
export default function RoutineDetailList({
  routineDetail,
}: IRoutineDetailListProps) {
  return (
    <ul>
      {routineDetail.map((r) => (
        <li key={r.id}>
          <Link href={`/${r.id}`}>{r.value}</Link>
        </li>
      ))}
    </ul>
  );
}
