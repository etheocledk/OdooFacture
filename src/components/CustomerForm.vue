<template>
    <div>
        <div class="w-full flex align-center justify-center ">
            <form  class="w-full" @submit.prevent="addCustomer(customer)">
                <div class="w-full  ">
                    <div>
                        <h1 class="text-xl  font-bold">
                            CLIENT
                        </h1>
                    </div>
                    <div class="" >
                        <div class="flex flex-col w-full">
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="ifu" class="w-28 text-gray text-xl">IFU</label>
                                <input type="text" class="w-full pt-2 p-2" style="" v-model="customer.ifu"/>
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="nom" class="w-28 text-gray text-xl">Nom</label>
                                <input type="text" class="w-full pt-2 p-2" v-model="customer.name"/>
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="adresse" class="w-28 text-gray text-xl">Adresse</label>
                                <input type="text" class="w-full pt-2 p-2" v-model="customer.address"/>
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="contact" class="w-28 text-gray text-xl">Contact</label>
                                <input type="text" class="w-full pt-2 p-2" v-model="customer.contact"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button>+</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import $httpInfo from "../plugins/axiosInfo";
import { useToast } from 'vue-toast-notification';
import type  {Client} from '../../Types/invoice';
const $toast = useToast();
const customer = ref({
    contact: '',
    ifu: '',
    name: '',
    address: ''
  })

const emits = defineEmits(['addCustomer'])
function addCustomer(customer:Client){
    emits('addCustomer', customer)
}
</script>
<style scoped>
h1 {
    border-bottom: 1px solid rgba(128, 128, 128, 0.521);
}

input {
    border-radius: 3px;
    outline: none;
    border: 1px solid rgba(128, 128, 128, 0.521);
}

</style>