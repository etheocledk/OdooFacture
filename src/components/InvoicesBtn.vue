<template>
    <button @click="openDropdown" class="px-6 py-3 bg-primary text-white border-none">Facture Normalisé V</button>
    <div v-if="open" @click="closeDropdown" class="absolute top-14 right-0 shadow w-64 py-3 px-2 mr-4" style="background:whitesmoke; width:300px">
        <div v-for="invoice in invoices" class="p-1 content-right">
            <li>
                <RouterLink to="" class="hover:underline">{{ invoice.description }}</RouterLink>
            </li>
        </div>
    </div>
</template>

<script lang="ts" setup>
import $httpInfo from "@/plugins/axiosInfo"
import {ref, onMounted} from "vue"


const open = ref(false)
function openDropdown(){
    open.value = !open.value
}
function closeDropdown(){
    open.value = false
}

var invoices : any = ref([])

async function invoicesType (){
    const invoiceTypes = await $httpInfo.get('/invoiceTypes')
    try{
        if(invoiceTypes.data.length != 0 && invoiceTypes.status == 200){
            invoices.value = invoiceTypes.data
            console.log(invoices.value);
            return invoices.value
        }else{
            console.log("Erreur lors de la récupération des donnée");
        }

    }catch(error){
        console.log(error);
        
    }
}
onMounted(() => {
      invoicesType();
});
</script>

<style scoped>
    button{
        border-radius:3px;
    }
</style>
