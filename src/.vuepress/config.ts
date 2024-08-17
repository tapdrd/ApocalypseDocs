import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "天启幻境",
  description: "天启幻境II是一款开放式的框架他并非特某一个游戏，你可以用它来开发各种各样的游戏休闲 ， 养成 ， 修仙 ， 古武 ， 奇幻 ， 探索 等等题材均可以.天启,天启幻境,天启幻境II,Tapdrd,tapdrd,trd",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
