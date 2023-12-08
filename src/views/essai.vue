<template>
    <div>
      <!-- Utilisation de v-model pour lier la référence réactive aux champs de formulaire -->
      <input v-model="invoiceData.ifu" type="text" placeholder="IFU" />
      <input v-model="invoiceData.type" type="text" placeholder="Type" />
  
      <!-- Liste des articles -->
      <div v-for="(item, index) in invoiceData.items" :key="index">
        <input v-model="item.name" type="text" placeholder="Nom de l'article" />
        <input v-model="item.price" type="number" placeholder="Prix" />
        <input v-model="item.quantity" type="number" placeholder="Quantité" />
        <input v-model="item.taxGroup" type="text" placeholder="Groupe de taxes" />
      </div>
  
      <!-- Informations sur le client -->
      <input v-model="invoiceData.client.contact" type="text" placeholder="Contact client" />
      <input v-model="invoiceData.client.ifu" type="text" placeholder="IFU client" />
      <input v-model="invoiceData.client.name" type="text" placeholder="Nom client" />
      <input v-model="invoiceData.client.address" type="text" placeholder="Adresse client" />
  
      <!-- Informations sur l'opérateur -->
      <input v-model="invoiceData.operator.id" type="text" placeholder="ID opérateur" />
      <input v-model="invoiceData.operator.name" type="text" placeholder="Nom opérateur" />
  
      <!-- Liste des paiements -->
      <div v-for="(payment, index) in invoiceData.payment" :key="index">
        <input v-model="payment.name" type="text" placeholder="Nom du paiement" />
        <input v-model="payment.amount" type="number" placeholder="Montant" />
      </div>
  
      <!-- Bouton de soumission du formulaire -->
      <button @click="submitInvoice">Soumettre</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // Création d'une référence réactive avec une valeur initiale
      const invoiceData = ref({
        ifu: '',
        type: '',
        items: [{ name: '', price: 0, quantity: 0, taxGroup: '' }],
        client: { contact: '', ifu: '', name: '', address: '' },
        operator: { id: '', name: '' },
        payment: [{ name: '', amount: 0 }],
      });
  
      // Fonction pour soumettre la facture
      const submitInvoice = () => {
        // Faites quelque chose avec les données de la facture, par exemple, envoyez-les à un serveur
        console.log(invoiceData.value);
      };
  
      // Retourner les propriétés et les méthodes que vous souhaitez rendre accessibles dans le template
      return {
        invoiceData,
        submitInvoice,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Vos styles CSS spécifiques au composant vont ici */
  </style>
  