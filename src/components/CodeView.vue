<!-- <template>
  <div>
    <button @click="downloadPDF">Download PDF</button>
    <div ref="pdfContent">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
      <div>
        <img :src="qrCodeUrl" alt="Code QR">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';
  import html2pdf from 'html2pdf.js';
  
  const pageTitle = ref('Vue.js Page');
  const pageDescription = ref('This is a description of the Vue.js page.');
  
  const pdfContent = ref(null); 
  
  const downloadPDF = () => {
    const content = pdfContent.value; 
  
    if (content) {
      html2pdf(content);
    }
  };
  
  onMounted(() => {
    pageTitle.value = 'Updated Title';
    pageDescription.value = 'This is an updated description.';
  });

const qrCodeUrl = ref('');

onMounted(() => {
  generateQRCode('https://example.com'); 
});

async function generateQRCode(data: string) {
  try {
    const url = await QRCode.toDataURL(data);
    qrCodeUrl.value = url;
  } catch (error) {
    console.error('Erreur lors de la génération du code QR :', error);
  }
}
</script>
<style scoped></style> -->
<template>
  <div>
    
  </div>
</template>