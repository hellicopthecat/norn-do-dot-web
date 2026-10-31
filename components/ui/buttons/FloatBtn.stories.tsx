import {Meta, StoryObj} from "@storybook/nextjs-vite";
import FloatBtn from "./FloatBtn";

const meta = {
  title: "UI/Buttons/FloatBtn",
  component: FloatBtn,
  tags: ["autodocs"],
} satisfies Meta<typeof FloatBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FloatBtnStory: Story = {
  args: {
    x: "right-0",
    y: "bottom-0",
    bgColor: "bg-slate-600",
    children: "icon",
  },
};
