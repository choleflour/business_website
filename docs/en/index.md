---
layout: home
hero:
  name: "Ubiz Alliance"
  text: "TeamUp Business"
  tagline: Turn Key Solution and Services
  actions:
     - theme: brand
       text: Sign up
       link: /guide/form
     - theme: alt
       text: Online Presentation
       link: /en/guide/more
features:
  - title: Ubiz Alliance Party
    icon: 
      # src: "https://cdn.jsdelivr.net/npm/@mdi/svg/svg/abjad-hebrew.svg"
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    details: |
      8/1 (Thursday) 13:30-17:00 5F 5C04, World Trade Hall 1, Xinyi Road 5C04 
      Open to All
    link: /guide/detail/party
  - title: AnyQ Mesh | Ultra Cloud | Agentic
    icon: 
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    details: Discover our advanced smart space applications, integrating cloud, edge, and devices. Expand globally with innovative solutions that redefine connectivity and intelligence.
    link: /en/guide/solution/solution
  - title: One Stop Solution and Services
    icon: 
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    details: Leverage BLE Mesh for IoT networks and indoor 5G private networks to create cutting-edge cloud-edge-device smart space applications ready for global markets.
    link: /guide/detail/services
---
<script setup>
const name = "Ubiz 雲耕聯盟";
const shortData = [
    {
      name: 'Ubiz Party 2024',
      url: 'https://m3.ypcloud.com/cms/2024_Ubiz_1_8aa9e2ec14.mov',
      img: 'https://m3.ypcloud.com/cms/Screenshot_2024_08_02_at_12_30_17_PM_ddbb288fde.png'
    },
    {
      name: 'Computex 2024',
      url: 'https://m3.ypcloud.com/cms/Smart_City_Summit_2024_122cd5f65f.mp4',
      img: 'https://m3.ypcloud.com/cms/Screenshot_2024_07_29_at_11_11_11_AM_9b2b2d1882.png'
    },
    {
      name: 'Smart City 2024',
      url: 'https://m3.ypcloud.com/cms/_ee8ec98a6c.mp4',
      img: 'https://m3.ypcloud.com/cms/Screenshot_2024_07_29_at_11_04_44_AM_99b35dd624.png'
    },
    {
      name: 'ASEAN 2024',
      url: 'https://m3.ypcloud.com/cms/TICC_d96544ad2b.mp4',
      img: 'https://m3.ypcloud.com/cms/Screenshot_2024_07_29_at_11_07_57_AM_c5210b3f27.png'
    },
  ]
  
</script>
<Short 
  :data="shortData"
/>
<ImgComponent
  src="https://m3.ypcloud.com/cms/ubiz_newvers_00c194d78e.jpg"
  url='guide/detail/party'
   />
<QR
  :title="name" 
  />
