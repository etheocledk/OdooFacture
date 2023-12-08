<template>
    <div>
        <div class="w-full  flex align-center justify-center">
            <form  class="w-full" @submit.prevent="addPayment(payment)">
                <div class="">
                    <div class=" mt-2 mb-2">
                        <h1 class="text-xl mb-2 font-bold">
                            MOYEN DE PAIEMENT
                        </h1>

                        <select name="" id="" class="w-full" v-model="payment.name">
                            <option v-for="(value, key) in paymentTypes" :key="key" :value="value.type"
                                class="hover:bg-light-blue">{{
                                    value.description }}</option>
                        </select>
                    </div>
                </div>
                <button>+</button>
            </form>
        </div>
    </div>
</template>
  

<style scoped>
h1 {
    border-bottom: 1px solid rgba(128, 128, 128, 0.521);
}

input {
    border-radius: 3px;
    outline: none;
    border: 1px solid rgba(128, 128, 128, 0.521);
}

select {
    border-radius: 3px;
    outline: none;
    background: none;
    border: 1px solid rgba(128, 128, 128, 0.521);
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import $httpInfo from "../plugins/axiosInfo";
import { useToast } from 'vue-toast-notification';
import type  {InvoiceData, Payment, InvoiceItem} from '../../Types/invoice';
const $toast = useToast();

const payment = ref<Payment>({
    name: "",
    amount: 0
})

const emits = defineEmits(['addPayment'])
function addPayment(data:Payment){
    emits('addPayment', data)
}
//INFORMATION SUR LES TYPES DE PAIEMENTS
const paymentTypes = ref();
const infoPayment = async () => {
    const typePayment = await $httpInfo.get('/paymentTypes')
    try {
        if (typePayment.data.lenght !== 0 && typePayment.status === 200) {
            paymentTypes.value = typePayment.data
            console.log(paymentTypes.value);

            return paymentTypes.value;
        } else {
            $toast.error('Aucune donnée !')
        }
    } catch (error) {
        $toast.error('Erreur lors de la récupération des données!')
    }
}

onMounted(async () => {
    await infoPayment();
})
</script>
  