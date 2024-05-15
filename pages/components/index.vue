<template>
  <div>
    <button @click="changeSelected('basicHeader')">Basic Header</button>
    <button @click="changeSelected('largeHeader')">Large Header</button>
  </div>
</template>

<script>
export default {
  name: "ComponentIndex",
  methods: {
    changeSelected(choice) {
      this.$localStorage.updateValues(choice);
    }
  }
};
</script>

<style>
</style>
