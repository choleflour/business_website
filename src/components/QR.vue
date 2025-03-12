<template>
    <div class="footer">
    <div id="modal">
      <button @click="showModal = true" class="qr-button">
        <svg class="light-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e0e0e0" stroke-width="0.072"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#e0e0e0CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 5.25H5.25V9.75H9.75V5.25ZM3.75 3.75V11.25H11.25V3.75H3.75ZM9.75 14.25H5.25V18.75H9.75V14.25ZM3.75 12.75V20.25H11.25V12.75H3.75ZM14.25 5.25H18.75V9.75H14.25V5.25ZM12.75 11.25V3.75H20.25V11.25H12.75ZM12.75 17.25V12.75H14.25V17.25H12.75ZM6.75 6.75V8.25H8.25V6.75H6.75ZM6.75 17.25V15.75H8.25V17.25H6.75ZM15.75 6.75V8.25H17.25V6.75H15.75ZM18.75 20.25V18H20.25V20.25H18.75ZM18.75 12.75V15H17.25V12.75H15.75V18.75H12.75V20.25H17.25V16.5H20.25V15V12.75H18.75Z" fill="#e0e0e0"></path> </g></svg>
        <svg class="dark-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e0e0e0" stroke-width="0.072"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#e0e0e0CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 5.25H5.25V9.75H9.75V5.25ZM3.75 3.75V11.25H11.25V3.75H3.75ZM9.75 14.25H5.25V18.75H9.75V14.25ZM3.75 12.75V20.25H11.25V12.75H3.75ZM14.25 5.25H18.75V9.75H14.25V5.25ZM12.75 11.25V3.75H20.25V11.25H12.75ZM12.75 17.25V12.75H14.25V17.25H12.75ZM6.75 6.75V8.25H8.25V6.75H6.75ZM6.75 17.25V15.75H8.25V17.25H6.75ZM15.75 6.75V8.25H17.25V6.75H15.75ZM18.75 20.25V18H20.25V20.25H18.75ZM18.75 12.75V15H17.25V12.75H15.75V18.75H12.75V20.25H17.25V16.5H20.25V15V12.75H18.75Z" fill="#e0e0e0"></path> </g></svg>

      </button>
      <Modal :isVisible="showModal" @close="showModal = false">
        <div class="modal-container">
          <div id="url">{{ currentUrl }}</div>
          <vue-qrcode
            id="qrcode"
            :value="currentUrl"
            @change="onDataUrlChange"
          />
          <div style="color:black; text-align: center; font-weight: 500; font-size: 20px;"> {{ title }}</div>
          <div style="padding-top:50px;"></div>
        </div>
        

      </Modal>
    </div>
  </div>
  </template>
  
<script setup>

  import { ref, onMounted } from 'vue';
  import Modal from './Modal.vue';
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  const showModal = ref(false);
  const value = ref(null);
  const currentUrl = ref('');
  function onDataUrlChange(newDataUrl) {
    value.value = newDataUrl;
  }
  onMounted(() => {
  if (typeof window !== 'undefined') {
    currentUrl.value = window.location.href;
  }
});
  const props = defineProps ({
    title: {
      type: String,
      default: 'Default'
    }
  });

</script>
  
  <style scoped>
  .light-icon {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%
  }
  .dark-icon {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%
  }

  #modal {
    text-align: center;
    margin-top: 10px;
  }
  #url {
    color: black !important;
    font-weight: 500;
    font-size: 20px;
  }
  canvas#qrcode {
    width: 350px !important;
    height: 350px !important;
  }
  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .qr-button {
    /* width: fit-content; */
    background: none;
    border: none;
    cursor: pointer;
  }

  .footer {
    position: relative;
    height: 50px;
    width: 50px;
    /* background-color: #f8f8f8; */
    z-index: 49;
    /* background-color: var(--footer-color); */
  }

  .light-icon {
    display: block;
  }

  .dark .light-icon {
    display: none;
  }

  .dark-icon {
    display: none;
  }

  .dark .dark-icon {
    display: block;
  }

  </style>
  