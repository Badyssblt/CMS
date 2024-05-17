<template>
<div class="flex flex-row">
    <sidebar/>
    <base-structure-vue :data="data" class="flex-1"/>
</div>

</template>

<script>
import nuxtStorage from "nuxt-storage";
import BaseStructureVue from '~/components/structures/BaseStructure.vue'
import Sidebar from '~/components/sidebar.vue'

export default {
    name: "index",
    components:  {
        BaseStructureVue,
        Sidebar
    },
    setup(){

        // Here the data who contains the name of components selected
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
