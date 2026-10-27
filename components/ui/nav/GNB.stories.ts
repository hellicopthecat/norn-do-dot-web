import {Meta, StoryObj} from "@storybook/nextjs-vite";
import GNB from "./GNB";

const meta = {
  title: "UI/Nav/GNB",
  component: GNB,
  tags: ["autodocs"],
} satisfies Meta<typeof GNB>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gnb_Story: Story = {
  args: {},
};
