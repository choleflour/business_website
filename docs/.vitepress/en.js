import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
  nav: nav(),

    // sidebar: {
    //   '/guide/': { base: '/guide/', items: sidebarGuide() },
    // },
  }
})


function nav() {
  return [
    { text: "Home", link: "/en/" },
    { text: "News", link: "/en/guide/news/news", activeMatch: '/en/guide/news/'},
    { text: "Solution", link: "/en/guide/solution/solution", activeMatch: '/en/guide/solution/'},
    { text: "Alliance", link: "/en/guide/alliance/alliance", activeMatch: '/en/guide/alliance/' },
    { text: "About", link: "/en/guide/about/about", activeMatch: '/en/guide/about/' },
  ]
}

// function sidebarGuide() {
//   return [
//     {
//       text: 'About',
//       items: [
//         { text: "about1", link: "/about/about1" },
//         { text: "about2", link: "/about/about2" },
//         { text: "about3", link: "/about/about3" },
//       ],
//     },
//     {
//       text: 'News',
//       items: [
//         { text: "news1", link: "/news/news1" },
//         { text: "news2", link: "/news/news2" },
//         { text: "news3", link: "/news/news3" },
//       ],
//     },
//   ]
// }
