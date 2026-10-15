import { publicAsset } from "../utils/publicAsset.js";

export const profile = {
  avatarCard: publicAsset("/images/工牌.png?v=bb4691fe17f2"),
  avatarAlt: "谢铮的工牌",
  nameEn: "YOUR NAME",
  nameCn: "你的名字",
  idCode: "PORTFOLIO / 2026",
  introEn: "A flexible portfolio system for multidisciplinary creative work. Replace this paragraph with a concise statement about your practice, point of view and the kind of problems you enjoy solving.",
  introCn: "这是一个面向多领域创意工作者的作品集模板。请把这段文字替换成你的设计方向、工作方法，以及你希望解决的问题。",
  contacts: [
    { label: "MAIL", value: "aries8th@189.cn" },
    { label: "BASE", value: "Changzhou Jiangsu" },
    { label: "STATUS", value: "Available" },
  ],
  timeline: [
    {
      year: "2025.10 - 2026.10",
      role: "市场专员",
      company: "DR PUPPY BAKERY",
      logo: publicAsset("/images/dr-puppy-bakery.png"),
      introduction: "甜品烘焙品牌",
      base: "英国 曼彻斯特",
      keyContributions: [
        "完成多家英国甜品烘焙品牌竞品调研报告，为品牌定位与差异化策略提供依据。",
        "通过线下推广活动与潜在用户开展深度访谈，梳理消费者购买决策因素及核心需求。",
        "运营小红书及微信社群，策划多形式线上活动搭建公域至私域的引流与客户转化链路。",
        "基于社群用户反馈及行为观察，持续提炼用户洞察，并据此优化内容策略与传播方向。",
        "基于竞品研究及用户洞察，完成品牌宣传物料的视觉设计，将品牌定位转化为具体视觉表达。",
      ],
      keywords: ["市场调研", "社群运营", "品牌视觉"],
    },
  ],
  tools: [
    { name: "Photoshop", icon: publicAsset("/icons/tools/photoshop.svg") },
    { name: "Premiere Pro", icon: publicAsset("/icons/tools/premiere.svg") },
    { name: "Illustrator", icon: publicAsset("/icons/tools/illustrator.svg") },
    { name: "Codex", icon: publicAsset("/icons/tools/chatgpt.svg"), lightBackground: true },
    { name: "Godot", icon: publicAsset("/icons/tools/godot.svg") },
    { name: "WORD", icon: publicAsset("/icons/tools/word.svg") },
    { name: "PPT", icon: publicAsset("/icons/tools/powerpoint.svg") },
    { name: "EXCEL", icon: publicAsset("/icons/tools/excel.svg") },
  ],
};


