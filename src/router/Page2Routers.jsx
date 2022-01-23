import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routers = [
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  },
  {
    path: "/",
    exact: true,
    children: <Page2 />
  }
];
