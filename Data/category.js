import { CiMobile4 } from "react-icons/ci";
import { GrGamepad } from "react-icons/gr";
import { IoCameraOutline, IoWatchOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export const Category = [
  {
    id: 1,
    category: "Woman's Fashion",
    subCategory: true,
  },
  {
    id: 2,
    category: "Men’s Fashion",
    subCategory: true,
  },
  {
    id: 3,
    category: "Electronics",
    subCategory: false,
  },
  {
    id: 4,
    category: "Home & Lifestyle",
    subCategory: false,
  },
  {
    id: 5,
    category: "Medicine",
    subCategory: false,
  },
  {
    id: 6,
    category: "Sports & Outdoor",
    subCategory: false,
  },
  {
    id: 7,
    category: "Baby’s & Toys",
    subCategory: false,
  },
  {
    id: 8,
    category: "Groceries & Pets",
    subCategory: false,
  },
  {
    id: 9,
    category: "Health & Beauty",
    subCategory: false,
  },
];

export const CategoryBrowse = [
  {
    id: 1,
    name: "Phones",
    img: CiMobile4,
  },
  {
    id: 2,
    name: "Computers",
    img: RiComputerLine,
  },
  {
    id: 3,
    name: "SmartWatch",
    img: IoWatchOutline,
  },
  {
    id: 4,
    name: "Camera",
    img: IoCameraOutline,
  },
  {
    id: 5,
    name: "HeadPhones",
    img: TfiHeadphoneAlt,
  },
  {
    id: 6,
    name: "Gaming",
    img: GrGamepad,
  },
];
