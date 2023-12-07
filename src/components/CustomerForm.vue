<template>
    <div>
        <div class="w-full p-8 flex align-center justify-center">
            <form action="" method="post" class="w-full">
                <div class="w-full p-4 ">
                    <div>
                        <h1 class="text-xl p-4 font-bold">
                            Client
                        </h1>
                    </div>
                    <div class="p-6" style="border-bottom: 1px solid rgba(128, 128, 128, 0.521)">
                        <div class="flex flex-col w-full">
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="ifu" class="w-28 text-gray text-xl">IFU</label>
                                <input type="text" class="w-full pt-2 p-2" style="" />
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="nom" class="w-28 text-gray text-xl">Nom</label>
                                <input type="text" class="w-full pt-2 p-2" />
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="adresse" class="w-28 text-gray text-xl">Adresse</label>
                                <input type="text" class="w-full pt-2 p-2" />
                            </div>
                            <div class="mt-2 mb-2 flex items-center gap-2 w-full">
                                <label for="contact" class="w-28 text-gray text-xl">Contact</label>
                                <input type="text" class="w-full pt-2 p-2" />
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex align-center justify-end">
                        <div class="border p-2 px-4 cursor-pointer font-bold">Annuler</div>
                        <div class="border ml-2 p-2 px-4 cursor-pointer font-bold text-white bg-primary border-primary">
                            Enregistrer</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import $httpInfo from "../plugins/axiosInfo";
import { useToast } from 'vue-toast-notification';
const $toast = useToast();

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

form {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 3px;
}
</style>