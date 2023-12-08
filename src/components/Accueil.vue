<template>
    <div>
        <div class="flex align-center justify-center items-center">
            <div class="w-2/4 p-4">
                <form @submit.prevent="addedInfo">
                    <div>
                        <h1 class="text-4xl pt-2 pb-2 font-bold">Bienvenue!!!</h1>
                        <p class="text-xl pt-2 pb-2">Mettez vos informations pour avoir accès au module de la facture.</p>
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-full" placeholder="Nom et Prénom" v-model="userInfo.name">
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="email" class="w-full" placeholder="Email" v-model="userInfo.email">
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-1/2" placeholder="Nom de l'entreprise"
                            v-model="userInfo.nameEntreprise">
                        <input type="number" class="w-1/2" placeholder="Numéro de téléphone" v-model="userInfo.tel" maxlength="8">
                    </div>
                    <div class="f">
                        <input type="number" class="w-1/2" placeholder="IFU" v-model="userInfo.ifu" minlength="13">
                    </div>
                    <div class="flex align-center justify-end pt-4 pb-4">
                        <button type="submit" style="border:1px solid white"
                            class="bg-headerColor border-primary text-white font-bold">Continuez</button>
                    </div>
                </form>
            </div>
            <div class="w-2/4 h-[95vh]">
                <img src="../assets/images/MECeF-Benin.png" alt="Company logo" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
import { ref } from 'vue';
const userInfo = ref({
    name: '',
    email: '',
    nameEntreprise: '',
    tel: '',
    ifu: ''
})

const addedInfo = () => {
    if (userInfo.value.ifu == '') {
        alert('Veuilez remplir tous les champs')
    } else {
        localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
        router.push('invoiceList')
    }
}

</script>

<style scoped>
input {
    border: none;
    border: 1px solid rgb(219, 217, 217);
    outline: none;
    padding: 10px;
    margin: 5px;
}

button {
    border: 1px solid black;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
}

span {
    color: #017e84;
}

span:hover {
    color: black;
}
</style>