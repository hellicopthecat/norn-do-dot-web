export default function HelpBadge({value}: {value: string}) {
  // return <span className="">{value}</span>;
  return (
    <span className="text-center absolute bg-slate-800 px-3 py-1 rounded-3xl transition-transform duration-200 ease-in-out group-hover:block group-hover:-translate-y-8 origin-bottom">
      {value}
    </span>
  );
}
