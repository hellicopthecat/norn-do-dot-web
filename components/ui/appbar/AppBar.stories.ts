import {Meta, StoryObj} from "@storybook/nextjs-vite";
import AppBar from "./AppBar";

const meta = {
  title: "UI/AppBar/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const App_Bar_Story: Story = {};
