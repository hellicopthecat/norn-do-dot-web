import {expect, fn} from "storybook/test";
import TxtInput from "./TxtInput";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import {useState, type ChangeEvent} from "react";

const meta = {
  title: "UI/Inputs/TxtInput",
  component: TxtInput,
  tags: ["autodocs"],
  argTypes: {
    onChange: {type: "function"},
  },
  args: {
    onChange: fn((e: ChangeEvent<HTMLInputElement>) => {
      console.log("입력된 값 :: ", e.currentTarget.value);
    }),
  },
} satisfies Meta<typeof TxtInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TxtInputStory: Story = {
  args: {
    id: "test",
    placeholder: "값을 넣어주세요.",
    value: "",
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);

    return (
      <TxtInput
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          args.onChange(event);
        }}
      />
    );
  },
  play: async ({canvas, userEvent, args}) => {
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "텍스트 입력 완료");
    await expect(input).toHaveValue("텍스트 입력 완료");
    await expect(args.onChange).toHaveBeenCalled();
  },
};
