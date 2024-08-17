import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  /* "/": [
    "",
    "portfolio",
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ], */
  /*  "/guide/": [
    {
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      text: "变量",
      icon: "square-root-variable",
      prefix: "variable/",
      link: "variable/",
      children: "structure",
    },
    {
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      text: "图片绘制",
      icon: "image",
      prefix: "picPTG/",
      link: "picPTG/",
      children: "structure",
    },
    "limit",
  ], */
  "/get-started/": "structure",
  "/guide/": "structure",
  "/faq/": "structure",
  "/dev/": "structure",
});
