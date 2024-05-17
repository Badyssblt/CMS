<template>
    <card-component/>
</template>

<script>
import { ref } from "vue";
import CardComponent from '../Cards/CardComponent.vue';
export default {
  components: { CardComponent },
    name: "RowComponents", 
    props: {
        name: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const name = props.name;
    }
}
</script>

<style>

</style>