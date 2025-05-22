import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://d.tapdrd.cc/",

  author: {
    name: "枭",
    /* url: "https://mister-hope.com", */
  },

  logo: "/favicon.ico",
  docsDir: "src",

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "https://gitlab.com/tapdrd/Apocalypse-docs",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitLab",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,

  // 全屏按钮
  fullscreen: false,

  // 打印按钮
  print: false,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "天启幻境",
  displayFooter: true,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },

  // markdown 配置
  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    footnote: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    highlighter: {
      lineNumbers: false,
      notationDiff: true,
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
    },
  },

  // 在这里配置主题提供的插件
  plugins: {
    icon: {
      assets: "fontawesome-with-brands"
    },
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    /* comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    }, */
    // 公告
    /* notice: [
      {
        path: "/",
        title: "Notice Title",
        content: "Notice Content",
        actions: [
          {
            text: "Primary Action",
            link: "https://theme-hope.vuejs.press/",
            type: "primary",
          },
          { text: "Default Action" },
        ],
      },
    ], */
    components: {
      components: ["Badge", "VPCard", "VPBanner"],
    },
  },
});
