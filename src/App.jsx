import { useEffect } from "react";
import Nav from "./components/Nav";
import GlowCursor from "./components/GlowCursor";
import SoundManager from "./components/SoundManager";
import Hero from "./components/Hero";
import About from "./components/About";
import IpSlider from "./components/IpSlider";
import BrandGrid from "./components/BrandGrid";
import AigcVideoLibrary from "./components/AigcVideoLibrary";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";
import { sections } from "./data/siteConfig";

const COMPONENT_MAP = {
  hero: Hero,
  about: About,
  ip: IpSlider,
  media: AigcVideoLibrary,
  brand: BrandGrid,
  contact: Contact,
};

function jumpToTopInstantly() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export default function App() {
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    jumpToTopInstantly();
  }, []);

  return (
    <>
      <GlowCursor />
      <SoundManager />
      <Nav />
      <main>
        {sections.map(({ id, enabled }) => {
          const Component = COMPONENT_MAP[id];
          return enabled && Component ? <Component key={id} /> : null;
        })}
      </main>
      <SiteFooter />
    </>
  );
}


