<template>
    <div>
        <div class="w-full flex align-center justify-center">
            <form action="" method="post" class="w-full">
                <div class="w-full  ">
                    <div>
                        <h1 class="text-xl  font-bold">
                            Client
                        </h1>
                    </div>
                    <div class="" >
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

</style>