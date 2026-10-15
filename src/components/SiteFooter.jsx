import "./SiteFooter.css";
import { siteInfo } from "../data/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="site-footer mono-label">
      <span>{siteInfo.heroName} - Personal Portfolio</span>
    </footer>
  );
}


