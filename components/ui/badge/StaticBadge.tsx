interface IStaticBadgeProps {
  color?: string;
  bgColor?: string;
  rounded?: string;
  value: string;
}
export default function StaticBadge({
  color = "black",
  bgColor = "inherit",
  rounded = "rounded-full",
  value,
}: IStaticBadgeProps) {
  return (
    <span
      className={`p-3 ${rounded} `}
      style={{backgroundColor: bgColor, color: color}}
    >
      {value}
    </span>
  );
}
