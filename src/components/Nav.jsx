import { siteInfo, sections } from "../data/siteConfig";
import SoundToggle from "./SoundToggle";
import "./Nav.css";

/**
 * 顶部导航栏
 * ------------------------------------------------------------
 * 固定在页面顶部,玻璃质感背景。点击链接会平滑滚动到对应模块
 * (用的是 html { scroll-behavior: smooth } + 锚点 <a href="#id">)。
 */
export default function Nav() {
  const navSections = sections.filter(
    (s) => s.enabled && s.id !== "hero"
  );

  return (
    <header className="nav-bar glass-strong">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="返回首页">
          <img className="nav-logo-mark" src={siteInfo.logoImage} alt="背影" width="40" height="40" />
          <span className="nav-logo-text mono-label">{siteInfo.titleEn}</span>
        </a>

        <nav className="nav-links" aria-label="主要导航">
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link">
              {s.labelCn}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <SoundToggle />
        </div>
      </div>
    </header>
  );
}




