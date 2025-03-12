// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import LangToggle from './LangToggle.vue'
import Tally from '../../../src/components/Tally.vue'
import ImgComponent from '../../../src/components/ImgComponent.vue'
import Slide from '../../../src/components/Slide.vue'
import Modal from '../../../src/components/Modal.vue'
import QR from '../../../src/components/QR.vue'
import './custom.css'
import './vars.css'
import './tailwind/tailwind.css'
import Short from '../../../src/components/Short.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('HomeImage', HomeImage),
    app.component('LangToggle', LangToggle),
    app.component('Tally', Tally),
    app.component('ImgComponent', ImgComponent),
    app.component('Short', Short),
    app.component('Slide', Slide),
    // app.component('QRSection', QRSection),
    app.component('Modal', Modal),
    app.component('QR', QR)
  }
}
