import { NavBar } from "../../components/NavBar";
import { SideBar } from "../../components/SideBar";
import { useState } from "react";
import { Hero } from "../../components/Hero";
import { InfoSection } from "../../components/InfoSection";
import {
  InfoData1,
  InfoData2,
  InfoData3,
} from "../../components/InfoSection/DataList";
import { Footer } from "../../components/Footer";

export function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <SideBar isOpen={isSideBarOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <InfoSection {...InfoData1} />
      <InfoSection {...InfoData2} />
      <InfoSection {...InfoData3} />
      <Footer />
    </>
  );
}
