import { useEffect, useRef, useState } from "react";
import { brandProjects } from "../data/brandProjects";
import { deferredImageProps } from "../utils/mediaPriority";
import "./BrandGrid.css";

/**
 * 品牌与商品视觉 —— 档案式浏览板块
 * ------------------------------------------------------------
 * 你说之前那版排版丑,参考了一个"档案浏览器"的样子重做:左边是一列
 * 可以往下滑的档案列表,每一条是缩略图 + 标题;右边直接显示当前选中
 * 这份企划的内容(整份企划拼起来的长图,往下滚动看),不用再点开
 * 弹窗了。右上角还有一对"上一份/下一份"按钮,不用回到左边列表也能
 * 一份一份往后翻。
 *
 * 以后企划还会一直加,左边这列表是自己滚动的,不会把整个板块撑高。
 */

export default function BrandGrid() {
  const [selectedId, setSelectedId] = useState(brandProjects[0]?.id);
  const bodyRef = useRef(null);
  const activeRowRef = useRef(null);

  const selectedIndex = Math.max(
    brandProjects.findIndex((p) => p.id === selectedId),
    0
  );
  const selected = brandProjects[selectedIndex] || brandProjects[0];

  // 换一份企划的时候,右边内容区滚动条自动回到顶部,不会停在上一份
  // 企划滚到一半的地方。
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [selectedId]);

  // 左边列表跟着选中项自动滚动到可见范围内(主要是用"上一份/下一份"
  // 按钮翻页,或者以后档案很多的时候用得上)。
  useEffect(() => {
    activeRowRef.current?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  function goTo(delta) {
    const next = (selectedIndex + delta + brandProjects.length) % brandProjects.length;
    setSelectedId(brandProjects[next].id);
  }

  if (!selected) return null;

  return (
    <section id="brand" className="section">
      <div className="container">
        <div className="section-eyebrow">
          <span className="dot" />
          04 — GAME DESIGN
        </div>
        <h2 className="section-title section-title-chinese">游戏策划</h2>

        <div className="brand-archive glass">
          <div className="brand-archive-list">
            <div className="brand-archive-list-head mono-label">
              <span>PROJECT LIST</span>
            </div>
            <div className="brand-archive-rows">
              {brandProjects.map((p, i) => {
                const isActive = p.id === selected.id;
                const thumb = p.portraitImage || p.image;
                return (
                  <button
                    type="button"
                    key={p.id}
                    ref={isActive ? activeRowRef : null}
                    className={`brand-archive-row${isActive ? " is-active" : ""}`}
                    onClick={() => setSelectedId(p.id)}
                    aria-current={isActive}
                  >
                    <span className="brand-archive-row-index mono-label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="brand-archive-row-thumb">
                      <img src={thumb} alt="" {...deferredImageProps} />
                    </span>
                    <span className="brand-archive-row-info">
                      <span className="brand-archive-row-title">{p.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="brand-archive-main">
            <div className="brand-archive-main-head">
              <span className="mono-label brand-archive-live">
                <span className="dot" aria-hidden="true" />
                NOW VIEWING
              </span>
              <div className="brand-archive-nav">
                <button type="button" onClick={() => goTo(-1)} className="mono-label">
                  ← PREV
                </button>
                <button type="button" onClick={() => goTo(1)} className="mono-label">
                  NEXT →
                </button>
              </div>
            </div>

            <div className="brand-archive-main-body" ref={bodyRef}>
              {(selected.images || [{
                src: selected.longImage || selected.image,
                label: `${selected.title} 完整企划`,
              }]).map((image) => (
                <img
                  key={`${selected.id}-${image.src}`}
                  src={image.src}
                  alt={image.label}
                  {...deferredImageProps}
                />
              ))}
            </div>

            <div className="brand-archive-main-foot">
              <span className="chip">{selected.tag}</span>
              <h3>{selected.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



