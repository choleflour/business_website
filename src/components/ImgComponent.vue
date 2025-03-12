<template>
  <div class="image-container">
    <a :href="url">
      <img class="image" :src="src">
    </a>
  </div>
</template>
<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  })
</script>
<style>
.image-container {
  position: relative;
  display: inline-block;
}

.image {
  border-radius: 12px;
  display: block;
}

.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 12px;
  transition: background-color 0.3s ease;
  pointer-events: none;
}

.image-container:hover::after {
  align-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

</style>