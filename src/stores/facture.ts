import { defineStore } from "pinia";
import {ref} from "vue";
import $httpInvoice  from "../plugins/axiosFacture";
import { useToast } from 'vue-toast-notification';
import type {InvoiceData} from '../../Types/invoice'

export const useInvoiceStore = defineStore('info', ()=>{
    const $toast = useToast();
    const dataInvoice = ref();
    const sendInvoice = async (setData: InvoiceData)=>{
        const setInvoice = await $httpInvoice.post('/', setData)
        try{
            if(setInvoice && setInvoice.data != 0 && setInvoice.status === 200){
                dataInvoice.value = setInvoice.data
                console.log(dataInvoice.value);
                
                return dataInvoice.value
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    const standard = ref()
    const getInvoiceStandard = async (uid:string, action:string)=>{
        const invoiceStandard = await $httpInvoice.put(`/${uid}/${action}`)
        try{
            if(invoiceStandard && invoiceStandard.data != 0 && invoiceStandard.status === 200){
                standard.value = invoiceStandard.data
                console.log(standard.value);
                return standard.value
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    return{
        dataInvoice,
        standard,
        sendInvoice,
        getInvoiceStandard
    }

})