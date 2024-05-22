<template>
  <div class="flex flex-row">
    <sidebar/>
    <base-structure-vue :data="data" class="flex-1"/>
    <validate-changement-component 
      v-if="lastClicked" 
      :componentName="lastClicked.name" 
      :type="lastClicked.type"
    />
  </div>
</template>

<script>
import nuxtStorage from "nuxt-storage";
import BaseStructureVue from '~/components/structures/BaseStructure.vue'
import Sidebar from '~/components/sidebar.vue'
import ValidateChangementComponent from '../components/forms/ValidateChangementComponent.vue';

export default {
  name: "index",
  components: {
    BaseStructureVue,
    Sidebar,
    ValidateChangementComponent    
  },
  setup() {
    const data = ref({
      header: nuxtStorage.localStorage.getData("header") || {},
      main: nuxtStorage.localStorage.getData("main") || {}
    });

    const lastClicked = ref(nuxtStorage.localStorage.getData("lastClicked") || { name: '', type: '' });

    return {
      data,
      lastClicked
    };
  }
}
</script>


