<template>
    <div>
    <div class="block">
        <img
              alt=""
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl"></h3>
        <set-component-button :name="name" :type="type"/>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardComponent",
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
    setup(props){
        const name = ref(props.name);
        const type = ref(props.type);

        return { 
            name, 
            type
        }
    }
}
</script>

<style>

</style>