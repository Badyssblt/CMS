<template>
   <div>
      <header ref="headerRef">
         <component :is="headerComponent" />
      </header>
      <main ref="mainRef">
      </main>
      <footer ref="footerRef">
      </footer>
   </div>
</template>

<script>
import { ref, onMounted } from "vue";
import selectedComp from '../selected';

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
      const headerComponent = ref(null);
      const mainComponent = ref(null);
      const data = ref(props.data);

      const insertIntoHeader = (html) => {
         headerRef.value.innerHTML = html;
      }

      onMounted(async () => {
         await getHeaderSelected();
         console.log(selectedComp);
      });

      const getHeaderSelected = async () => {
         try {
            const headerModule = await import(`@/components/headers/${data.value.header}.vue`);
            
            headerComponent.value = headerModule.default;
         } catch (error) {
            console.error("Erreur lors de l'importation du composant de header :", error);
         }
      }

      const checkStruct = (data) => {
         if(!data["header"] || !data["main"] || !data["footer"]) return;
      }

      return {
         headerRef,
         headerComponent
      }
   }
}
</script>

<style>

</style>
