<template>
    <div class="flex justify-between">
        <SearchBtn/>
        <InvoicesBtn/>
    </div>
    <div class="w-full h-full m-auto mt-20">
        <table class="w-full h-full">
        <thead class="border border-gray-300 bg-primary">
            <tr>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">#</th>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">NIM</th>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">GUICHET</th>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">codeMECeFDGI</th>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">CODE QR</th>
                <th class="whitespace-nowrap border border-black py-2 px-2 text-white text-left">DATE</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-y border-gray-300 even:bg-gray-100 odd:bg-white">
                <td class="border py-2 px-2">#</td>
                <td class="border py-2 px-2">IN01000005</td>
                <td class="border py-2 px-2">64/64 Facture de Vente</td>
                <td class="border py-2 px-2">X537-E4DB-AJUU-HHXN-FWIS-FEK</td>
                <td class="border py-2 px-2">F;IN01000005;X537E4DBAJUUHHXNFWISFEKJ;9999900000001;20201123131708</td>
                <td class="border py-2 px-2">23/11/2020 13:17:08</td>
            </tr>
          <!-- Ajoutez plus de lignes selon vos besoins -->
        </tbody>
      </table>
    </div>
</template>


<script lang="ts" setup>
import InvoicesBtn from './InvoicesBtn.vue'
import SearchBtn from './SearchBtn.vue';
</script>