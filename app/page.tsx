import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { MoreWork } from "@/components/MoreWork";
import { Story } from "@/components/Story";
import { Opinion } from "@/components/Opinion";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <MoreWork />
        <Story />
        <Opinion />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
