<template>
    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" @click="changeSelected(nameComp, typeComp)">Utiliser</button>
</template>

<script>
import { ref } from "vue";
import nuxtStorage from "nuxt-storage";
export default {
    name: "SetComponentButton",
    props: {
        name: {
            required: true,
            type: String
        },
        type: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const nameComp = ref(props.name);
        const typeComp = ref(props.type);

/**
   * Set the localStorage value
   *
   * @param {string} choice The name of the component
   * @param {string} type MUST BE header, main OR footer
   */
    const changeSelected = (choice, type) => {
      nuxtStorage.localStorage.setData(type, choice, 10, 'd');
    }


    return {
      changeSelected,
      nameComp,
      typeComp
    }

    }
}
</script>

<style>

</style>