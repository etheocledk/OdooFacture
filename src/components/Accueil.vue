<template>
    <div>
        <div class="flex align-center justify-center items-center">
            <div class="w-2/4 p-4">
                <form action="" method="post">  
                    <div>
                        <h1 class="text-4xl pt-2 pb-2 font-bold">Bienvenue!!!</h1>
                        <p class="text-xl pt-2 pb-2">Mettez vos informations pour avoir accès au module de la facture.</p>
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-full" placeholder="Nom et Prénom">
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text"  class="w-full" placeholder="Email" >
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-1/2" placeholder="Nom de l'entreprise" >
                        <input type="text"  class="w-1/2" placeholder="Numéro de téléphone" >
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-1/2" placeholder="Pays" >
                        <input type="text" class="w-1/2" placeholder="IFU">
                    </div>
                    <div class="flex align-center justify-center">
                        <input type="text" class="w-1/2" placeholder="Taillle de l'entreprise">
                        <input type="text"  class="w-1/2" placeholder="Intêrêt principal">
                    </div>
                    <!-- <p class="pt-4 pb-4">En cliquant sur <strong> Démarrer maintenant</strong>, vous acceptez <span><a href="">Conditions d'abonnement</a></span> et <span><a href="">Politique vie privée</a></span></p> -->
                    <div class="flex align-center justify-end pt-4 pb-4">
                        <!-- <button style="border:1px solid #017e84" class="font-bold">Changer les applications sélectionnées</button> -->
                        <button style="border:1px solid white" class="bg-headerColor border-primary text-white font-bold"> <a href="/invoiceList">Continuez</a></button>
                    </div>
                </form>
            </div>
            <div class="w-2/4 h-[662px]">
                <img src="../assets/images/MECeF-Benin.png" alt="Company logo" class="w-full h-full object-cover" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>

<style scoped>
input{
    border:none;
    border:1px solid rgb(219, 217, 217);
    outline: none;
    padding: 10px;
    margin: 5px;
}
button{
    border: 1px solid black;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
}
span{
    color: #017e84;
}
span:hover{
    color: black;
}
</style>