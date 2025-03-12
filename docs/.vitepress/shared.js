import { defineConfig } from 'vitepress'
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateSidebar() {
  const guideDir = path.resolve(__dirname, '../en/guide/')
  
  function getItems(dir, basePath = '') {
    const items = []
    const files = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name)
      const relativePath = path.join(basePath, file.name)
      
      if (file.isDirectory()) {
        const subItems = getItems(fullPath, relativePath)
        if (subItems.length > 0) {
          items.push({
            text: file.name.charAt(0) + file.name.slice(1).replace(/-/g, ' '),
            collapsed: true,
            items: subItems
          })
        }
      } else if (file.isFile() && path.extname(file.name) === '.md' && file.name !== 'index.md') {
        const name = path.parse(file.name).name
        items.push({
          text: name.charAt(0) + name.slice(1).replace(/-/g, ' '),
          link: `/guide/${relativePath.replace(/\\/g, '/').replace(/\.md$/, '')}`
        })
      }
    }
    
    return items
  }

  const allItems = getItems(guideDir)

  // Create dynamic sidebars for each page
  const dynamicSidebars = {}
  
  function traverseItems(items, parentItems = [], parentPath = '') {
    items.forEach(item => {
      const currentPath = (item.link ? item.link.split('/guide/')[1] : '')
      if (item.items) {
        traverseItems(item.items, parentItems.concat(item), currentPath + '/')
      } else {
        dynamicSidebars['/guide/' + currentPath] = parentItems.map(i => ({
          text: i.text,
          collapsed: false,
          items: i.items
        })).concat([{
          text: item.text,
          link: item.link
        }])
      }
    })
  }

  traverseItems(allItems)

  return {
    '/guide/': allItems,
    ...dynamicSidebars
  }
}


export const shared = defineConfig({
  title: "Ubiz",
  description: "TeamUp Taiwan",
  sidebar: generateSidebar(),
  // publicDir: path.resolve(__dirname, '../public'),
  base: "/ubiz/",
  rewrites: {
    'zh/:rest*': ':rest*'
  },

  head: [
    ["link", { rel: "icon", href: "/ubiz/favicon.ico" }],
    ["link", { rel: "mask-icon", href: "/ubiz/favicon.ico", color: "#ffffff" }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/Ultra-red.png",
    siteTitle: false,
  },  
})