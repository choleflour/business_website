<template>
    <Layout>
      <template #nav-bar-title-after>
        <LangToggle />
      </template>
    </Layout>
  </template>
  
  <script>
  import DefaultTheme from 'vitepress/theme'
  
  const { Layout } = DefaultTheme
  export default {
    components: {
      Layout
    }
  }
  </script>