## web://ubiz
### Built with VitePress, Vue.js, using Markdown
### Multi-language support: English and Chinese, configured in en.js and zh.js
To add extend the navigator bar, go to en.js or zh.js file and edit the code below
```
function nav() {
  return [
    { text: "Home", link: "/en/" },
    { text: "News", link: "/en/guide/news/news", activeMatch: '/en/guide/news/'},
    { text: "More", link: "/en/guide/more", activeMatch: '/en/guide/more'},
    ...
  ]
}
```
## Notes on Vue Components
### QR-code component for Vue 3
https://fengyuanchen.github.io/vue-qrcode

```
npm install @chenfengyuan/vue-qrcode
```

```
<vue-qrcode
    id="qrcode"
    :value="currentUrl"
    @change="onDataUrlChange"
/>
```

### Short Section
Videos you can swipe, composed of shorts, that can be viewed on the website, etc.

Install Swiper and SASS
Official websire for Swiper: https://swiperjs.com/
```
npm install -D sass
npm install swiper
```