<template>
   <div>
      <header ref="headerRef" @click="handleClick('header', data.header)" :key="Object.keys(data.header)">
         <component :is="headerComponent" />
      </header>
      <main ref="mainRef" @click="handleClick('main', data.main)" :key="Object.keys(data.main)">
         <component :is="mainComponent" />
      </main>
      <footer ref="footerRef">
      </footer>
   </div>
</template>

<script>
import { ref, onMounted } from "vue";
import nuxtStorage from "nuxt-storage";

export default {
   name: "baseStructure",
   props: {
      data: {
         type: Object,
         required: false
      }
   },
   setup(props, context){
      const headerRef = ref(null);
      const mainRef = ref(null);
      const footerRef = ref(null);

      // props of structure
      const headerComponent = ref(null);
      const mainComponent = ref(null);

      // Data contains name of components selected
      const data = ref(props.data);


      if(data.value.header == null) data.value.header = "basicHeader";
      if(data.value.main == null) data.value.main = "basicMain";

      const insertIntoHeader = (html) => {
         headerRef.value.innerHTML = html;
      }

      const insertIntoMain = (html) => {
         mainRef.value.innerHTML = html;
      }

      onMounted(async () => {
         await getHeaderSelected();
         await getMainSelected();
      });

      const getHeaderSelected = async () => {
         try {
            const headerModule = await import(`@/components/headers/${data.value.header}.vue`);
            
            headerComponent.value = headerModule.default;
         } catch (error) {
            console.error("Erreur lors de l'importation du composant de header :", error);
         }
      }

      const getMainSelected = async () => {
         try {
            const mainModule = await import(`@/components/mains/${data.value.main}.vue`);
            mainComponent.value = mainModule.default;
         } catch (error) {
            console.error("Erreur lors de l'importation du composant main :", error);
         }
      }

      const checkStruct = (data) => {
         if(!data["header"] || !data["main"] || !data["footer"]) return;
      }

      // set the name of the element clicked in localStorage
      const handleClick = (type, name) => {
         nuxtStorage.localStorage.setData("lastClicked", {type, name}, 10, 'd');
      }

      return {
         headerRef,
         headerComponent,
         mainRef, 
         mainComponent,
         data,
         handleClick
      }
   }
}
</script>

<style>

</style>
