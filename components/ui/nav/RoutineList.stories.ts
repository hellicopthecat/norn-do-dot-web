import {Meta, StoryObj} from "@storybook/nextjs-vite";
import RoutineList from "./RoutineList";

const meta = {
  title: "UI/Nav/RoutineList",
  component: RoutineList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RoutineList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Routine_List_Story: Story = {
  args: {
    routine: [
      {id: "1", title: "To Do Title1"},
      {id: "2", title: "To Do Title2"},
    ],
  },
};
