<template>
<div class="flex flex-row">
    <sidebar/>
    <base-structure-vue :data="data" class="flex-1"/>
    <validate-changement-component :componentName="'basicHeader'" :type="'header'"/>
</div>

</template>

<script>
import nuxtStorage from "nuxt-storage";
import BaseStructureVue from '~/components/structures/BaseStructure.vue'
import Sidebar from '~/components/sidebar.vue'
import ValidateChangementComponent from '../components/forms/ValidateChangementComponent.vue';

export default {
    name: "index",
    components:  {
        BaseStructureVue,
        Sidebar,
        ValidateChangementComponent    
    },
    setup(){

        const data = ref({});
        data.value = {
            header: (nuxtStorage.localStorage.getData("header")),
            main: (nuxtStorage.localStorage.getData("main"))
        }

        
    
        
        return {
            data
        }
    }
}
</script>

<style>

</style>
