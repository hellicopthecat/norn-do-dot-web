import {Meta, StoryObj} from "@storybook/nextjs-vite";
import Label from "./Label";

const meta = {
  title: "UI/Labels/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic_Label: Story = {
  args: {
    idFor: "TEST",
    value: "TEST",
  },
};
