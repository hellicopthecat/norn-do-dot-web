import {Dispatch, ReactNode, SetStateAction} from "react";

interface IRightDrawer {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
export default function RightDrawer({
  active,
  setActive,
  children,
}: IRightDrawer) {
  const closeDrawer = () => setActive(false);
  return (
    <aside
      style={{transform: active ? "translateX(0)" : "translateX(200%)"}}
      className={`flex flex-col gap-3  transition-transform ease-in-out duration-200 rounded-md border border-white`}
    >
      <div className="bg-(--glass-bg) backdrop-blur-md *:p-3">
        <div className="flex justify-between items-center bg-white w-full ">
          <button
            className="cursor-pointer text-black flex"
            onClick={closeDrawer}
          >
            x
          </button>
        </div>
        <div className="">{children}</div>
      </div>
    </aside>
  );
}
