import { MainButton } from "./main-button";
import { BasketIcon } from "../../assets";

export default {
  title: "MainButton Atom",
  component: MainButton,
};

export const ShowMore = {
  args: {
    variant: "main",
    children: "Show more",
  },
};

export const basket = {
  args: {
    variant: "secondary",
    children: <img src={BasketIcon} />,
  },
};
