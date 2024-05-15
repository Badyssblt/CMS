<template>
<div class="flex flex-row">
    <sidebar/>
    <base-structure-vue :data="data"/>
</div>

</template>

<script>
import fs from 'fs';
import BaseStructureVue from '~/components/structures/BaseStructure.vue'
import Sidebar from '~/components/sidebar.vue'

export default {
    name: "index",
    components:  {
        BaseStructureVue,
        Sidebar
    },
    setup(){
            const data = {
            header: "basicHeader"
        }


        return {
            data
        }
    }
}
</script>

<style>

</style>
