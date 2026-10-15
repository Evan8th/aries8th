import { publicAsset } from "../utils/publicAsset.js";

export const siteInfo = {
  nameEn: "DUSTY WANDER",
  nameCn: "尘世闲游",
  heroGreeting: "Hello, It's Me",
  heroName: "谢铮",
  shortTag: "尘",
  logoImage: publicAsset("/images/背影.jpg"),
  titleEn: "Personal Index",
  role: "平面设计 / 视频编辑 / 独立游戏",
  roleEn: "GRAPHIC DESIGN / VIDEO EDITING / INDIE GAMES",
};

export const sections = [
  { id: "hero", label: "Home", labelCn: "首页", enabled: true },
  { id: "about", label: "Work Experience", labelCn: "工作经历", enabled: true },
  { id: "ip", label: "Brand Visuals", labelCn: "品牌视觉", enabled: true },
  { id: "media", label: "Video Editing", labelCn: "视频编辑", enabled: true },
  { id: "brand", label: "Game Design", labelCn: "游戏策划", enabled: true },
  { id: "contact", label: "Contact", labelCn: "期待合作", enabled: true },
];


