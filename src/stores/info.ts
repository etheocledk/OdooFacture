import { defineStore } from "pinia";
import {ref} from "vue";
import $httpInfo  from "../plugins/axiosInfo";
import { useToast } from 'vue-toast-notification';

export const useInfoStore = defineStore('info', ()=>{
    const $toast = useToast();

    //INFORMATION SUR LES E-MECEF
    const mecef = ref();
    const infoEmecef = async () =>{
        const emecef = await $httpInfo.get('/status')
        try{
            if(emecef.data.lenght !==0 && emecef.status === 200){
                mecef.value = emecef.data 
                return mecef.value;
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    //INFORMATION SUR LES TYPES DE FACTURES
    const invoicesTypes = ref();
    const infoInvoices = async () =>{
        const types = await $httpInfo.get('/invoiceTypes')
        try{
            if(types.data.lenght !==0 && types.status === 200){
                invoicesTypes.value = types.data
                return invoicesTypes.value;
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    //INFORMATION SUR LES GROUPES DE TAXATIONS
    const taxGroups = ref();
    const infoTax = async () =>{
        const groupTax = await $httpInfo.get('/taxGroups')
        try{
            if(groupTax.data.lenght !==0 && groupTax.status === 200){
                taxGroups.value = groupTax.data
                return taxGroups.value;
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    //INFORMATION SUR LES TYPES DE PAIEMENTS
    const paymentTypes = ref();
    const infoPayment = async () =>{
        const typePayment = await $httpInfo.get('/paymentTypes')
        try{
            if(typePayment.data.lenght !==0 && typePayment.status === 200){
                paymentTypes.value = typePayment.data
                return paymentTypes.value;
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    return {
        mecef,
        invoicesTypes,
        taxGroups,
        paymentTypes,
        infoEmecef,
        infoInvoices,
        infoTax,
        infoPayment
    }
})