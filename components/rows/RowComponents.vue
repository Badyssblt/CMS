<template>
  <div class="flex flew-wrap">
      <card-component
        v-for="(item, index) in data"
        :key="index"
        :name="item"
        :type="type"
      />
  </div>
</template>

<script>
import { ref } from "vue";
import CardComponent from '../Cards/CardComponent.vue';
export default {
  components: { CardComponent },
    name: "RowComponents", 
    props: {
        data: {
            required: true,
            type: Object
        },
        type: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const data = ref(props.data);
        const type = ref(props.type);


        return {
            data,
            type
        }
    }
}
</script>

<style>

</style>