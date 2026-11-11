import MainWrapper from "@/components/ui/container/MainWrapper";
import GNB from "@/components/ui/nav/GNB";

export default function OneDepthLayout({children}: LayoutProps<"/">) {
  return (
    <MainWrapper>
      <section className="h-full p-5 pb-10">{children}</section>
      <GNB />
    </MainWrapper>
  );
}
