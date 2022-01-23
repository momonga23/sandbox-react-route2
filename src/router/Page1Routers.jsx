import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1 } from "../Page1";

export const page1Routers = [
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  },
  {
    path: "/",
    exact: true,
    children: <Page1 />
  }
];
