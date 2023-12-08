<template>
    <div>
        <div class="w-full  flex align-center justify-center">
            <form action="" method="post" class="w-full" @submit.prevent="addArticle(itemsArticle)">
                <div class="w-full">
                    <div>
                        <h1 class="text-xl  mt-4 font-bold">
                            AJOUTER UN ARTICLE
                        </h1>
                    </div>
                    <div class="" >
                        <div class="flex mb-2 w-full">
                            <div class="mt-2 mb-2 w-full">
                                <input type="text" class="p-2 w-full" style="" placeholder="Désignation de l'article"  v-model="itemsArticle.name"/>
                            </div>
                            <div class="mt-2 mb-2 w-full">
                                <select name="" id="" class="w-full pt-2 p-2 flex justify center" placeholder="" v-model="itemsArticle.taxGroup">
                                    <option value="" >Séléctionnez le groupe de taxation</option>
                                    <option v-for="(value, key) in taxGroups" :key="key" :value="value"
                                        class="hover:bg-light-blue">{{
                                            formatOptionLabel(key.toString()) }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex my-2 w-full">
                            <div class="mt-2 mb-2 w-full">
                                <input type="number" class="w-full pt-2 p-2" style="" placeholder="Prix Unitaire TTC" v-model="itemsArticle.price"/>
                            </div>
                            <div class="mt-2 mb-2 w-full">
                                <input type="number" class="w-full pt-2 p-2" style="" placeholder="Quantité" v-model="itemsArticle.quantity"/>
                            </div>
                        </div>
                        <!-- <div class=" my-4">
                            <input type="number" class="w-full pt-2 p-2" style="" placeholder="Taxe Spécifique (TS)" />
                        </div> -->
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
import type  {InvoiceData, Payment, InvoiceItem} from '../../Types/invoice';
import { useToast } from 'vue-toast-notification';
import { emit } from "process";
const $toast = useToast();

const itemsArticle = ref<InvoiceItem>({
    name:'',
    price: 0,
    quantity: 0,
    taxGroup: ''
})

const emits = defineEmits(['addArticle'])
function addArticle(data:InvoiceItem){
    emits('addArticle', data)
}

var taxGroups: any = ref();
const infoTax = async () => {
    const groupTax = await $httpInfo.get('/taxGroups')
    try {
        if (groupTax.data && groupTax.data.length!== 0 && groupTax.status === 200) {
            taxGroups.value = groupTax.data
            console.log(taxGroups.value.a);

            return taxGroups.value;
        } else {
            $toast.error('Aucune donnée !')
        }
    } catch (error) {
        $toast.error('Erreur lors de la récupération des données!')
    }
}

const formatOptionLabel = (key: string) => {
    switch (key) {
        case "a":
            return "A-EXONERER";
        case "b":
            return "B-TAXABLE 18%";
        case "c":
            return "C-EXPORTATION";
        case "d":
            return "D-TVA REGIME D'EXCEPTION 18%";
        case "e":
            return "E-REGIME TPS";
        case "f":
            return "F-RESERVE";
        case "aibA":
            return "AIB(1%)";
        case "aibB":
            return "AIB(5%)";
        default:
            return key;
    }
};

onMounted(() => {
    infoTax();
})

const getOptionDetails = (key: string) => {
    switch (key) {
        case "a":
            return "Groupe A - Produits exonérés Biens ou services exonérés de la TVA (Exonération classoques)";
        case "b":
            return "Groupe B - Produits taxables Biens et services taxables à la TVA Concerne aussi les biens et services, taxables ou non, vendus à l’Etat, aux collectivités locales, aux sociétés d’Etat et autres démembrements de l’Etat par des entreprises relevant de la TPS ou non assujetties à la TVA";
        case "c":
            return "Groupe C - Produits taxables à l’exportation Enregistre les exportations de biens et services taxables au Bénin";
        case "d":
            return "Groupe D - Produits taxables dont le client bénéficie d’un régime d’exception";
        case "e":
            return "Groupe E - Moins de  50 millions de chiffre d’affaires  hors  option TVA";
        case "f":
            return "Groupe F - Réservé Prend tout ce qui n’est pas spécifié comme la Taxe de séjour, débours et consignations, contribution sur les services de communication etc";
        case "aibA":
            return "AIB(1%)";
        case "aibB":
            return "AIB(5%)";
        default:
            return key;
    }

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

select {
    border-radius: 3px;
    outline: none;
    background: none;
    border: 1px solid rgba(128, 128, 128, 0.521);
    padding: 8px 0;
}

form {
    border-radius: 3px;
}
</style>