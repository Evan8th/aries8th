import { useState } from "react";
import { ipProjects } from "../data/ipProjects";
import AccordionGallery from "./AccordionGallery";
import FashionDetail from "./FashionDetail";
import "./IpSlider.css";

/**
 * IP衍生与商品开发 —— "书架"式手风琴交互
 * ------------------------------------------------------------
 * 案例排成一排,平时看起来像书架上一本本立着的书,只露出很窄
 * 的"书脊"。鼠标移到哪一本,哪一本就展开、变成完整的封面(书的
 * 正面);在展开的这本上点一下,才会弹出详情页,翻看这个项目里
 * 完整的一组图片(复用"女装"板块同款的 FashionDetail 组件)。
 *
 * 这个"书架"效果直接复用了本站已有的 AccordionGallery 组件
 * (原本用在插画板块),这里用 orientation="horizontal",让书本
 * 横向排成一排。
 */
export default function IpSlider() {
  const [opened, setOpened] = useState(null);

  const items = ipProjects.map((p) => ({
    image: p.cover,
    label: p.label || `${p.index} ${p.title}`,
    alt: p.titleCn,
    // 书脊(没展开时)上要显示的三行内容:编号 + 中文书名 + 英文书名
    spineIndex: p.index,
    spineTitleCn: p.titleCn,
    spineTitleEn: p.spineTitleEn || p.title,
  }));

  return (
    <section id="ip" className="section">
      <div className="container">
        <div className="section-eyebrow">
          <span className="dot" />
          02 — BRAND VISUALS
        </div>
        <h2 className="section-title section-title-chinese">品牌视觉</h2>

        <div className="ip-accordion-wrap">
          <AccordionGallery
            items={items}
            orientation="horizontal"
            defaultIndex={-1}
            collapseOnLeave
            height={560}
            gap={7}
            radius={14}
            expandRatio={0.28}
            minimumSlots={6}
            accentColor="var(--accent)"
            overlayColor="var(--bg)"
            textColor="var(--text)"
            spineLabels
            className="ip-accordion"
            onSelect={(i) => setOpened(ipProjects[i])}
          />
        </div>
      </div>

      <FashionDetail item={opened} onClose={() => setOpened(null)} />
    </section>
  );
}



