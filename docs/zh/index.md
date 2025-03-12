---
layout: home
hero:
  name: "Ubiz 雲耕聯盟"
  text: "共贏商業平台"
  tagline: 整案輸出 國際市場
  actions:
     - theme: brand
       text: 我要報名
       link: /guide/form
     - theme: alt
       text: 線上簡報
       link: /guide/more
  footer: true
features:
  - title: 雲耕聯盟茶會 - 8/1 (四)
    icon: 
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    link: guide/detail/party
    details: |
      敬邀參加雲耕聯盟茶會-天羅地網智慧體 
      8/1 (四）13:30 -17:00 信義路世貿一館5F 5C04 
      產品展示、茶會交流、自由參加

  - title: 天羅｜地網｜智慧體
    icon: 
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    link: guide/solution/solution
    details: |
      Ultra Cloud  企業AI混合雲
      AnyQ Mesh    BLE智慧空間網路
      AI Agentic   AI小小兵智慧體

  - title: 共贏｜共營｜共雲
    icon: 
      src: "https://m3.ypcloud.com/cms/Ultra_red_b22078d526.png"
    link: guide/detail/services
    details: |
      以BLE Mesh建構物聯網路（~室內5G專網）
      發展各式雲邊端協同智慧空間應用 
      𤨣案輸出國際市場
---
<script setup>
  const name = "Ubiz 雲耕聯盟";
  const shortData = [
    {
      name: 'Ubiz Party 2024',
      url: 'https://m3.ypcloud.com/cms/ubiz_2024_2_79c5ef8b08.MOV',
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
  :isVideoLoop='true'
  :swiperAutoplayCount="1"
/>
<ImgComponent
  src="https://m3.ypcloud.com/cms/ubiz_newvers_00c194d78e.jpg"
  url='guide/detail/party'
   />
<QR
  :title="name" />

