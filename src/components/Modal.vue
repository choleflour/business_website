<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close" style="color:black;">Close</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    /* z-index: 90; */
  }
  
  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 5px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #007BFF;
    border-radius: 5px;
    font-size: 16px;
    padding:5px;
    color: white !important;
  }
  </style>
  