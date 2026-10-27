import {Meta, StoryObj} from "@storybook/nextjs-vite";
import StaticBadge from "./StaticBadge";

const meta = {
  title: "UI/Badge/StaticBadge",
  component: StaticBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {control: "color"},
    bgColor: {control: "color"},
  },
} satisfies Meta<typeof StaticBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Static_Badge_Story: Story = {
  args: {
    color: "#fff",
    bgColor: "#312fff",
    value: "STATIC BADGE",
  },
};
