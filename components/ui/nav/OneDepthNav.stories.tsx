import {Meta, StoryObj} from "@storybook/nextjs-vite";
import OneDepthNav from "./OneDepthNav";

const meta = {
  title: "UI/Nav/OneDepthNav",
  component: OneDepthNav,
  tags: ["autodocs"],
  argTypes: {routines: {type: "symbol"}},
} satisfies Meta<typeof OneDepthNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OneDepthNavStory: Story = {};
