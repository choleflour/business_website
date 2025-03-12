import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)

export const zh = defineConfig({
  lang: 'zh-TW',
  themeConfig: {
    nav: nav(),

    // sidebar: {
    //   '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
    // },
  }
})

function nav() {
  return [
    { text: "首頁", link: "/" },
    { text: "新聞", link: "/guide/news/news", activeMatch: '/guide/news/' },
    { text: "方案", link: "/guide/solution/solution", activeMatch: '/guide/solution/' },
    { text: "聯盟", link: "/guide/alliance/alliance", activeMatch: '/guide/alliance/' },
    { text: "關於", link: "/guide/about/about", activeMatch: '/guide/about/'},
  ]
}

// function sidebarGuide() {
//   return [
//     {
//       text: '關於',
//       items: [
//         { text: "關於1", link: "/about/about1" },
//         { text: "關於2", link: "/about/about2" },
//         { text: "關於3", link: "/about/about3" },
//       ],
//     },
//     {
//       text: '新聞',
//       items: [
//         { text: "新聞1", link: "/news/news1" },
//         { text: "新聞2", link: "/news/news2" },
//         { text: "新聞3", link: "/news/news3" },
//       ],
//     },
//   ]
// }
