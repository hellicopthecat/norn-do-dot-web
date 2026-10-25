import {Meta, StoryObj} from "@storybook/nextjs-vite";
import LinkBtn from "./LinkBtn";

const meta = {
  title: "UI/Buttons/LinkBtn",
  component: LinkBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkBtn>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    link: "/",
    label: "hello",
  },
};
