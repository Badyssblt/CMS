<template>
  <div class="flex flex-row">
    <sidebar/>
    <div class="flex flex-col">
      <div>
        <h2 class="font-bold text-xl">Headers</h2>
        <div class="flex flex-wrap">
          <div>
            <div class="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Header Basic</h3>
            <set-component-button name="basicHeader" type="header"/>
            </div>
          </div>
          <div>
            <div class="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Header Large</h3>
            <set-component-button name="largeHeader" type="header"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="font-bold text-xl">Mains</h2>
        <div class="flex flex-wrap">
          <div>
            <div class="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Header Basic</h3>
            <set-component-button name="basicHeader" type="header"/>
            </div>
          </div>
          <div>
            <div class="block">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Header Large</h3>
            <set-component-button name="largeHeader" type="header"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    

  </div>
</template>

<script>
import nuxtStorage from "nuxt-storage";
import sidebar from '~/components/sidebar.vue';
import SetComponentButton from '~/components/buttons/SetComponentButton.vue';

export default {
  components: { sidebar, SetComponentButton },
  name: "ComponentIndex", 
  setup(context){
    
    
  }
};
</script>

<style>
</style>
