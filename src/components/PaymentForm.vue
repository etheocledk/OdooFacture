<template>
    <div>
        <div class="w-full p-8 flex align-center justify-center">
              <form action="" method="post" class="w-full">
                      <div class="w-full p-4 ">
                          <div>
                              <h1 class="text-xl p-4 font-bold">
                              Type de paiement
                              </h1>
                          </div>
                          <div class="p-6" style="border-bottom: 1px solid rgba(128, 128, 128, 0.521)">
                              <div class="mt-2 mb-2">
                                <select name="" id="" class="w-full">
                                    <option v-for="(value, key) in paymentTypes" :key="key" :value="value.type" class="hover:bg-light-blue" >{{
                                       value.description }}</option>
                                </select>
                              </div>
                          </div>

                          <div
                              class="p-6 flex align-center justify-end"
                          >
                              <div class="border p-2 px-4 cursor-pointer font-bold">Annuler</div>
                              <div class="border ml-2 p-2 px-4 cursor-pointer font-bold text-white bg-primary border-primary">Enregistrer</div>
                          </div>
                      </div>
              </form>
        </div>
    </div>
  </template>
  

  <style scoped>
  h1{
      border-bottom: 1px solid rgba(128, 128, 128, 0.521);
  }
  input{
      border-radius: 3px;
      outline: none;
      border: 1px solid rgba(128, 128, 128, 0.521);
  }
  select{
      border-radius: 3px;
      outline: none;
      background: none;
      border: 1px solid rgba(128, 128, 128, 0.521);
      padding-top: 10px;
      padding-bottom: 10px;
  }
  form{
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      border-radius: 3px;
  }
  </style>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import $httpInfo from "../plugins/axiosInfo";
import { useToast } from 'vue-toast-notification';
const $toast = useToast();

    //INFORMATION SUR LES TYPES DE PAIEMENTS
    const paymentTypes = ref();
    const infoPayment = async () =>{
        const typePayment = await $httpInfo.get('/paymentTypes')
        try{
            if(typePayment.data.lenght !==0 && typePayment.status === 200){
                paymentTypes.value = typePayment.data
                console.log(paymentTypes.value);
                
                return paymentTypes.value;
            }else{
                $toast.error('Aucune donnée !')
            }
        }catch(error){
            $toast.error('Erreur lors de la récupération des données!')
        }
    }

    onMounted(async ()=>{
        await infoPayment();
    })
</script>
  