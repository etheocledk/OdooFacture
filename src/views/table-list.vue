<template>
  <div>
    <Header />
    <main>
      <section class="mt-[10px] px-3">
        <div class="flex justify-between">
          <h1 class="text-[16px] text-[800] text-gray">Liste des factures</h1>
          <input type="search" name="" id="" placeholder="Search..."
            class="border-b-[1px] border-gray rounded-none w-[600px] outline-none">
        </div>
        <div class="flex gap-[10px] mt-3">
          <button class="bg-headerColor text-white px-2 py-1 text-[16px] rounded-[2px] font-[500]">Enregistrer</button>
          <button class="border-2 border-headerColor px-2 py-1 text-[16px] rounded-[2px] font-[500]">Télécharger</button>
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
                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button"
                    data-bs-toggle="modal" data-bs-target="#exampleModal">Commencer</button>
                </div>
                <div class="text-center">
                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button"
                    data-bs-toggle="modal" data-bs-target="#modalTwo">Commencer</button>
                </div>
                <div class="text-center">
                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button"
                    data-bs-toggle="modal" data-bs-target="#modalThree">Commencer</button>
                </div>
                <div class="text-center">
                  <h1 class="text-white font-[600] text-[16px]">Facture - Informations</h1>
                  <p class="text-white">Veuillez saisir les détails de la facture</p>
                  <button class="px-2 py-1 border-white border-[1px] text-white rounded-md mt-2" type="button"
                    data-bs-toggle="modal" data-bs-target="#modalFour">Commencer</button>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">Type de Facture</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span class="mdi mdi-alpha-x-circle mdi-24px"></span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" @submit.prevent="sendTypeInvoice">
            <div>
                <h1 class="text-xl">
                  Séléctionnez une facture
                </h1>
              </div>
              
            <select name="" id="" class="w-full" v-model="typeInvoice">
             
              <option v-for="invoice in invoices" :value="invoice.type">{{ invoice.description }}</option>
            </select>
            <div class="modal-footer">
              <button type="button"
                class="border border-headerColor px-2 py-2 rounded-md text-headerColor font-[500]">Enregistrer</button>
            </div>
          </form>

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
          <form action="" @submit.prevent="saveData(customer)">
            <div class="w-full  ">
              <div>
                <h1 class="text-xl  font-bold">
                  CLIENT
                </h1>
              </div>
              <div class="">
                <div class="flex flex-col w-full">
                  <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                    <label for="ifu" class="w-28 text-gray text-xl">IFU</label>
                    <input type="text" class="w-full pt-2 p-2" style="" v-model="customer.ifu" />
                  </div>
                  <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                    <label for="nom" class="w-28 text-gray text-xl">Nom</label>
                    <input type="text" class="w-full pt-2 p-2" v-model="customer.name" />
                  </div>
                  <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                    <label for="adresse" class="w-28 text-gray text-xl">Adresse</label>
                    <input type="text" class="w-full pt-2 p-2" v-model="customer.address" />
                  </div>
                  <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                    <label for="contact" class="w-28 text-gray text-xl">Contact</label>
                    <input type="text" class="w-full pt-2 p-2" v-model="customer.contact" />
                  </div>
                </div>
              </div>
            </div>
            <ArticleForm class="shadow-none" @addArticle="sendArticle"></ArticleForm>
            <PaymentForm @addPayment="sendPayment"></PaymentForm>
            <div class="p-6 flex align-center justify-end">
              <!-- <div class="border p-2 px-4 cursor-pointer font-bold">Annuler</div> -->
              <button class="border ml-2 p-2 px-4 cursor-pointer font-bold text-headerColor border border-headerColor">
                Enregistrer</button>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button"
            class="border border-headerColor font-bold px-2 py-2 rounded-md text-headerColor font-[500]">Envoyer la
            demande</button>
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
import { ref, onMounted } from "vue";
import $httpInfo from "@/plugins/axiosInfo"
import type { InvoiceData, Payment, InvoiceItem, Client } from '../../Types/invoice';
import { useInvoiceStore } from "@/stores/facture"
const addData = useInvoiceStore()
const payment = ref<Payment>({
  name: "",
  amount: 0
})

const itemsArticle = ref<InvoiceItem>({
  name: '',
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

const customer = ref({
  contact: '',
  ifu: '',
  name: '',
  address: ''
})
function add() {
  addData.sendInvoice(data.value)
}
function sendArticle(article: InvoiceItem) {
  data.value.items.push(article)
  console.log(data.value.items);
}

function sendPayment(payment: Payment) {
  data.value.payment.push(payment)
  console.log(data.value.payment);
}

function saveData(customer: Client) {
  data.value.client = customer
  localStorage.setItem('invoiceData', JSON.stringify(data.value))
  console.log(data.value);
}



var invoices: any = ref([])

async function invoicesType() {
  const invoiceTypes = await $httpInfo.get('/invoiceTypes')
  try {
    if (invoiceTypes.data.length != 0 && invoiceTypes.status == 200) {
      invoices.value = invoiceTypes.data
      console.log(invoices.value);
      return invoices.value
    } else {
      console.log("Erreur lors de la récupération des donnée");
    }

  } catch (error) {
    console.log(error);

  }
}

const typeInvoice = ref()
function sendTypeInvoice (){
  localStorage.setItem('type', JSON.stringify(typeInvoice.value))
}
onMounted(() => {
  invoicesType();
});
</script>