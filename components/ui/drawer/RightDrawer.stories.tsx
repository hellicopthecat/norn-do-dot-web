import {Meta, StoryObj} from "@storybook/nextjs-vite";
import RightDrawer from "./RightDrawer";
import {useArgs} from "storybook/internal/preview-api";

const meta = {
  title: "UI/Drawer/RightDrawer",
  component: RightDrawer,
  tags: ["autodocs"],
  argTypes: {
    active: {type: "boolean"},
    setActive: {type: "function"},
  },
} satisfies Meta<typeof RightDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RightDrawerStory: Story = {
  args: {
    active: false,
    setActive: () => {},
    children: "드로어 컨텐츠",
  },
  render: function (args) {
    const [{active}, updateArgs] = useArgs<typeof args>();
    return (
      <>
        <button
          className="cursor-pointer"
          onClick={() => updateArgs({active: true})}
        >
          Drawer Open
        </button>
        <RightDrawer
          active={active}
          setActive={(next) => {
            updateArgs({
              active: typeof next === "function" ? next(active) : next,
            });
          }}
        >
          {args.children}
        </RightDrawer>
      </>
    );
  },
};
