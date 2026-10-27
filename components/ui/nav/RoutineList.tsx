interface IRoutineType {
  id: string;
  title: string;
}
interface IRoutineListProps {
  routine: IRoutineType[];
}

export default function RoutineList({routine}: IRoutineListProps) {
  return (
    <nav>
      <ul>
        {routine.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </nav>
  );
}
