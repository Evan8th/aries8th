import { publicAsset } from "../utils/publicAsset.js";

export const ipProjects = Array.from({ length: 3 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  if (index === 0) {
    return {
      id: "ip-project-01",
      index: "01",
      title: "果蔬美容养生",
      titleCn: "果蔬美容养生",
      spineTitleEn: "PROJECT 01",
      label: "果蔬美容养生",
      tag: "美容护肤品牌",
      cover: publicAsset("/images/guoshu-beauty/02-materials.png"),
      includeCoverInGallery: false,
      images: [
        { src: publicAsset("/images/guoshu-beauty/01-design.png"), label: "01 设计思路" },
        { src: publicAsset("/images/guoshu-beauty/02-materials.png"), label: "02 物料效果" },
      ],
    };
  }
  if (index === 2) {
    return {
      id: "ip-project-03",
      index: "03",
      title: "DR PUPPY",
      titleCn: "DR PUPPY",
      spineTitleEn: "PROJECT 03",
      label: "DR PUPPY",
      tag: "甜品烘焙品牌",
      cover: publicAsset("/images/dr-puppy/03.png?v=440e7183165e"),
      includeCoverInGallery: false,
      images: [
        { src: publicAsset("/images/dr-puppy/01.png"), label: "VIEW 01" },
        { src: publicAsset("/images/dr-puppy/02.png"), label: "VIEW 02" },
        { src: publicAsset("/images/dr-puppy/03.png?v=440e7183165e"), label: "VIEW 03" },
      ],
    };
  }
  return {
    id: `ip-project-${number}`,
    index: number,
    title: "西氿湾",
    titleCn: "西氿湾",
    spineTitleEn: "PROJECT 02",
    label: "西氿湾",
    tag: "水产生鲜品牌",
    cover: publicAsset("/images/xijiuwan/09.png?v=3"),
    includeCoverInGallery: false,
    images: Array.from({ length: 10 }, (_, imageIndex) => {
      const imageNumber = String(imageIndex + 1).padStart(2, "0");
      const extension = imageNumber === "07" ? "jpg" : "png";
      const version = imageNumber === "10" ? "4" : "3";
      return {
        src: publicAsset(`/images/xijiuwan/${imageNumber}.${extension}?v=${version}`),
        label: `VIEW ${imageNumber}`,
      };
    }),
  };
});


