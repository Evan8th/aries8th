import { publicAsset } from "../utils/publicAsset.js";

export const brandProjects = [
  {
    id: "brand-project-01",
    title: "拾光拼途",
    tag: "GAME / WORLD / SYSTEM",
    image: publicAsset("/images/shiguang-pintu/cover.png"),
    images: Array.from({ length: 6 }, (_, index) => {
      const number = String(index + 1).padStart(2, "0");
      return {
        src: publicAsset(`/images/shiguang-pintu/${number}.png`),
        label: `拾光拼途 企划 ${number}`,
      };
    }),
  },
];



