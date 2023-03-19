/**

* Vuepress 最终需要的配置信息, 修改其他信息在此处配置

*/

var config = {
    dest: './dist',

    base: '/',

    title: "天启幻境II 文档",

    description: "天启幻境II是一款开放式的框架他并非特某一个游戏，你可以用它来开发各种各样的游戏休闲 ， 养成 ， 修仙 ， 古武 ， 奇幻 ， 探索 等等题材均可以.天启,天启幻境,天启幻境II,Tapdrd,tapdrd,trd",

    head: [
        ["link", {
            rel: "icon",
            href: "/logo.png",
            lang: 'zh-CN'
        }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4']
    },
    plugins: [
        ['one-click-copy', {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['@vuepress/nprogress'],
        ['@vuepress/back-to-top'],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        [
            'vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        // 这是 VuePress 默认主题使用这个插件的方式
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: {
                    '/': '提示'
                },
            },
        ],
    ],
    themeConfig: {
        nav: [{
            text: '社区',
            link: 'http://b.tapdrd.cn'
        }
        ],
        sidebar: [{
            title: '首页',
            collapsable: false,
            children: [
                ['/index/', '信息'],
                ['/index/command', '指令'],
                ['/index/auth', '授权']
            ]
        },
        {
            title: '教程',
            collapsable: false,
            children: [
                ['/course/install', '基础安装'],
                ['/course/web_set', "网页设置"],
                ['http://b.tapdrd.cn/list-18-1.html', "使用教程"]
            ]
        },
        {
            title: '功能',
            collapsable: false,
            children: [
                ['/matter/', '常见问题'],
                ['/fun/', '功能解说'],
                ['/limit/', '限制消耗']
            ]
        },
        {
            title: '拓展',
            collapsable: false,
            children: [
                ['/plugin/install/', '安装'],
                ['/plugin/user_msg/', '开发']
            ]
        },
        {
            title: 'Web开发',
            collapsable: false,
            children: [
                ['/web/', '介绍'],
                ['/web/norm/', '规范']
            ]
        },
        {
            title: '变量',
            collapsable: false,
            children: [
                ['/variable/fun/', '功能'],
                ['/variable/global/', '全局']
            ]
        }, {
            title: '图片',
            collapsable: false,
            children: [
                ['/image/', '概述'],
                ['/image/custom', '图片自定义绘制']
            ]
        },
        {
            title: '更新日志',
            collapsable: false,
            children: [
                ['/update/', '3.4.0'],
                ['/update/3.3.0', '3.3.0'],
                ['/update/3.2.0', '3.2.0'],
                ['/update/3.1.0', '3.1.0'],
                ['/update/3.0.3', '3.0.3'],
                ['/update/3.0.2', '3.0.2'],
                ['/update/3.0.1', '3.0.1'],
                ['/update/3.0.0', '3.0.0'],
                /* ['/update/2.1.5', '2.1.5'],
                ['/update/2.1.4', '2.1.4'],
                ['/update/2.1.3', '2.1.3'],
                ['/update/2.1.2', '2.1.2'],
                ['/update/2.1.1', '2.1.1'],
                ['/update/2.1.0', '2.1.0'],
                ['/update/2.0.3', '2.0.3'],
                ['/update/2.0.2', '2.0.2'],
                ['/update/2.0.1', '2.0.1'],
                ['/update/2.0.0', '2.0.0'] */
            ]
        }
        ],
        sidebarDepth: 2,
        displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
        activeHeaderLinks: true // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    }

};

module.exports = config;