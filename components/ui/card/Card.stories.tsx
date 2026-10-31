import {Meta, StoryObj} from "@storybook/nextjs-vite";
import Card from "./Card";

const meta = {
  title: "UI/Card/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartStory: Story = {
  args: {
    children: (
      <>
        <h2 className="text-white">카드제목</h2>
        <p className="text-white">카드본문내용</p>
      </>
    ),
  },
  render: function Render({children}) {
    return (
      <div className="bg-linear-150 from-[#4e0d00] to-[#123fff] p-3">
        <Card>{children}</Card>
      </div>
    );
  },
};
