<template>
  <div class="flex flex-row">
    <sidebar/>
    <div class="flex flex-col">
      <row-components v-for="(item, index) in data" :data="item" :type="index"/>
    </div>
    

  </div>
</template>

<script>
import nuxtStorage from "nuxt-storage";
import sidebar from '~/components/sidebar.vue';
import SetComponentButton from '~/components/buttons/SetComponentButton.vue';
import RowComponents from '../../components/rows/RowComponents.vue';

export default {
  components: { sidebar, SetComponentButton, RowComponents },
  name: "ComponentIndex", 
  setup(context){
    const data = 
    {
      header: [
        "basicHeader", "largeHeader"
      ],
      main: [
        "basicMain", "largeMain"
      ]
    }

    return {
      data
    }
    
  }
};
</script>

<style>
</style>
