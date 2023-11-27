import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
} from "react-icons/ai";

export const navLinks = [
  {
    id: 0,
    title: "Home",
    link: "/",
    icon: <AiOutlineHome size={15} />,
  },
  {
    id: 1,
    title: "Cryptocurrencies",
    link: "/cryptocurrencies",
    icon: <AiOutlineFund size={15} />,
  },
  {
    id: 2,
    title: "Exchanges",
    link: "/exchanges",
    icon: <AiOutlineMoneyCollect size={15} />,
  },
  {
    id: 3,
    title: "News",
    link: "/news",
    icon: <AiOutlineBulb size={15} />,
  },
];
