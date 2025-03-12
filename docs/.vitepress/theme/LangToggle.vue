<template>
    <div class="lang-toggle">
      <select @change="changeLang($event)">
        <option v-for="lang in langs" :key="lang.text" :value="lang.link">
          {{ lang.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LangToggle',
    computed: {
      langs() {
        return this.$site.themeConfig.langToggle
      }
    },
    methods: {
      changeLang(event) {
        window.location.href = event.target.value
      }
    }
  }
  </script>
  
  <style scoped>
  .lang-toggle {
    margin-left: 1rem;
  }
  </style>