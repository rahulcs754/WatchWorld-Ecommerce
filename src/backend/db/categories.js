import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "man",
    description: "",
    linkCategory: "/products",
    bannerImage:
      "https://res.cloudinary.com/rahulcs754/image/upload/v1647696854/e-comm/categoryhome/watchformancompress_rmmft8.png",
  },
  {
    _id: uuid(),
    categoryName: "woman",
    description: "",
    linkCategory: "/products",
    bannerImage:
      "https://res.cloudinary.com/rahulcs754/image/upload/v1647696849/e-comm/categoryhome/Watch_for_womancompres_llja2c.png",
  },
];
