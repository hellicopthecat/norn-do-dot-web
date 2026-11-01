import {Meta, StoryObj} from "@storybook/nextjs-vite";
import CheckboxInput from "./CheckboxInput";
import {useArgs} from "storybook/internal/preview-api";

const meta = {
  title: "UI/Inputs/CheckboxInput",
  component: CheckboxInput,
  tags: ["autodocs"],
  argTypes: {
    id: {type: "string"},
    checked: {type: "boolean"},
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxInputStory: Story = {
  args: {
    id: "check-1",
    checked: false,
    setChange: () => {},
  },
  render: function (args) {
    const [{id, checked}, updateArgs] = useArgs<typeof args>();
    return (
      <CheckboxInput
        id={id}
        checked={checked}
        setChange={() =>
          updateArgs({
            checked: !checked,
          })
        }
      />
    );
  },
};
