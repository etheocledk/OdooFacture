<template>
  <div>
      <Header/>
      <main>
          <section class="mt-[10px] px-3">
              <div class="flex justify-between">
                  <h1 class="text-[16px] text-[800] text-gray">Liste des factures</h1>
                  <input type="search" name="" id="" placeholder="Search..."
                      class="border-b-[1px] border-gray rounded-none w-[600px] outline-none">
              </div>
              <div class="flex gap-[10px] mt-3">
                  <button
                      class="bg-headerColor text-white px-2 py-1 text-[16px] rounded-[2px] font-[500]">Enregistrer</button>
                  <button
                      class="border-2 border-headerColor px-2 py-1 text-[16px] rounded-[2px] font-[500]">Télécharger</button>
              </div>
          </section>
          <section class="mt-4">
              <div class="w-full h-[230px]">
                  <img src="../assets/images/20221012_ban_1500x430px_DIFF_FACT_NUM_ELECTRO.jpg" alt=""
                      class="w-full h-full object-cover">
                  <div class="w-full h-[230px] absolute top-[145px] left-0 bg-[#0085597e]">
                      <div class="w-full h-full items-center justify-center mt-20 ">
                          <div class="flex items-center justify-center">
                              <div>
                                  <div class="bg-white w-3 h-3 rounded-full"></div>
                              </div>
                              <hr class="w-[400px] border-white border-2">
                              <div class="bg-[#fcb157] w-5 h-5 rounded-full flex justify-center items-center">
                                  <span class="mdi mdi-check mdi-light"></span>
                              </div>
                              <hr class="w-[400px] border-white border-2">
                              <div class="bg-white w-3 h-3 rounded-full"></div>
                              <hr class="w-[400px] border-white border-2">
                              <div class="bg-[#fcb157] w-5 h-5 rounded-full flex justify-center items-center">
                                  <span class="mdi mdi-check mdi-light"></span>
                              </div>
                          </div>
                          <div class="flex justify-between px-5 mt-2">
                              <div class="text-center">
                                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Commencer</button>
                              </div>
                              <div class="text-center">
                                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button" data-bs-toggle="modal" data-bs-target="#modalTwo">Commencer</button>
                              </div>
                              <div class="text-center">
                                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button" data-bs-toggle="modal" data-bs-target="#modalThree">Commencer</button>
                              </div>
                              <div class="text-center">
                                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button" data-bs-toggle="modal" data-bs-target="#modalFour">Commencer</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section>
              <div class="">
                  <div class="col-lg-12">
                      <div class="">
                          <div class="table-responsive">
                              <table class="table project-list-table table-nowrap align-middle table-borderless">
                                  <thead class="table-secondary">
                                      <tr class="bg-gray">
                                          <th scope="col" class="ps-4" style="width: 50px;">#</th>
                                          <th scope="col">Date</th>
                                          <th scope="col">Nom</th>
                                          <th scope="col">Prénom</th>
                                          <th scope="col">Ifu</th>
                                          <th scope="col">Code QR</th>
                                          <th scope="col">Nim</th>
                                          <th scope="col">Contact</th>
                                          <th scope="col">Adresse</th>
                                          <th scope="col">Type de P.</th>
                                          <th scope="col">Montant</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th scope="row" class="ps-4">1</th>
                                          <td>12/04/2023</td>
                                          <td>GNANSOUNOU</td>
                                          <td>Prisca</td>
                                          <td>679878464877845</td>
                                          <td>648</td>
                                          <td>Q779R15</td>
                                          <td>+22997587458</td>
                                          <td>Calavi,Benin</td>
                                          <td>Espèce</td>
                                          <td>158000 XOF</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </div>

  

<!-- Modal1 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Informations</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span class="mdi mdi-alpha-x-circle mdi-24px"></span>
      </button>
    </div>
    <div class="modal-body">
      <CustomerForm></CustomerForm>
    </div>
    <div class="modal-footer">
      <button type="button" class="bg-headerColor px-2 py-2 rounded-md text-white font-[500]">Creer</button>
      <button type="button" class="  text-headerColor font-[500]" data-bs-dismiss="modal">Annuler</button>
    </div>
  </div>
</div>
</div>
<!-- Modal2 -->
<div class="modal fade" id="modalTwo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" style=" padding:">
  <div class="modal-content p-2" style="width:1000px">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"> Type de paiement</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span class="mdi mdi-alpha-x-circle mdi-24px"></span>
      </button>
    </div>
    <div class="modal-body w-full">
      <CustomerForm></CustomerForm>
        <ArticleForm class="shadow-none"></ArticleForm>
        <PaymentForm></PaymentForm>
    </div>
    <div class="p-6 flex align-center justify-end">
        <div class="border p-2 px-4 cursor-pointer font-bold">Annuler</div>
            <div class="border ml-2 p-2 px-4 cursor-pointer font-bold text-white bg-primary border-primary">
                Enregistrer</div>
            </div>
    <div class="modal-footer">
      <button type="button" class="bg-headerColor px-2 py-2 rounded-md text-white font-[500]">Creer</button>
    </div>
  </div>
</div>
</div>

<!-- Modal3 -->
<div class="modal fade " id="modalThree" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg ">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Verification</h1>
    </div>
    <div class="modal-body">
      <Invoice></Invoice>
    </div>
    <div class="modal-footer">
      <button type="button" class="bg-headerColor px-2 py-2 rounded-md text-white font-[500]">Creer</button>
      <button type="button" class="  text-headerColor font-[500]" data-bs-dismiss="modal">Annuler</button>
    </div>
  </div>
</div>
</div>


<!--    Modal4 -->
<div class="modal fade" id="modalFour" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Informations</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span class="mdi mdi-alpha-x-circle mdi-24px"></span>
      </button>
    </div>
    <div class="modal-body">
      Modal4
    </div>
    <div class="modal-footer">
      <button type="button" class="bg-headerColor px-2 py-2 rounded-md text-white font-[500]">Creer</button>
      <button type="button" class="  text-headerColor font-[500]" data-bs-dismiss="modal">Annuler</button>
    </div>
  </div>
</div>
</div>
</template>
<!-- 
<script setup lang="ts">
import Invoice from '../components/Invoice.vue';
import Header from "../components/Header.vue";
import PaymentForm from "../components/PaymentForm.vue";
import CustomerForm from '@/components/CustomerForm.vue';
import ArticleForm from '../components/ArticleForm.vue'
import { onMounted } from "vue";
</script>
 -->
<script setup lang="ts">
import Invoice from '../components/Invoice.vue';
import Header from "../components/Header.vue";
import PaymentForm from "../components/PaymentForm.vue";
import ArticleForm from "../components/ArticleForm.vue";
import CustomerForm from '@/components/CustomerForm.vue';
import { ref,onMounted } from "vue";
import type  {InvoiceData, Payment, InvoiceItem} from '../../Types/invoice';
import {useInvoiceStore} from "@/stores/facture"
const addData = useInvoiceStore()
const payment = ref<Payment>({
    name: "",
    amount: 0
})
const itemsArticle = ref<InvoiceItem>({
    name:'',
    price: 0,
    quantity: 0,
    taxGroup: ''
  })

const data = ref<InvoiceData>({
      ifu: '',
      type: '',
      items: [itemsArticle.value],
      client: { contact: '', ifu: '', name: '', address: '' },
      operator: { id: '', name: '' },
      payment: [payment.value],
})

function add (){
   addData.sendInvoice(data.value)
}
</script>