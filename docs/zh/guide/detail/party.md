---
layout: page
---
<script setup>
// import Slide from "../../../../src/components/Slide.vue"
const imageData = [
  {
      name: '1',
      
      url: 'https://m3.ypcloud.com/cms/Screenshot_2024_08_05_at_11_59_48_AM_eae39a898d.png',
    },
    {
      name: '2',
      url: 'https://m3.ypcloud.com/cms/Screenshot_2024_08_05_at_11_59_31_AM_6b90231a89.png',
    },
    {
      name: '3',
      url: 'https://m3.ypcloud.com/cms/IMG_5613_59a7508d95.jpg',
    },
    {
      name: '4',
      url: 'https://m3.ypcloud.com/cms/photo_2024_07_15_15_17_45_c2829ce66f.jpg',
    },
    {
      name: '5',
      url: 'https://m3.ypcloud.com/cms/Screenshot_2024_08_05_at_11_59_11_AM_5ac2f37786.png',
    },
    {
        name: '6',
        url: 'https://m3.ypcloud.com/cms/ubiz_newvers_00c194d78e.jpg',
    }
]
</script>

<Slide
  :data="imageData"
/>