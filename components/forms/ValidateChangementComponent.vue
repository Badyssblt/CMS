<template>
  <div class="fixed top-10 right-10 bg-slate-100 rounded-xl w-12 h-12 flex justify-center p-2">
    <button @click="submitChange">
    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 26 26">
        <path id="check" d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></path>
    </svg>
    </button>
    
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from "axios";


export default {
    name: "ValidateChangementComponent",
    props: {
        componentName: {
            required: true,
            type: String
        },
        type: {
            required: true,
            type: String
        }
    },
    setup(props){
        const componentName = ref(props.componentName);

        // Type of component trying to be modified
        const type = ref(props.type);

        // Call to API 
        const submitChange = async () => {
            const currentComponent = document.querySelector(type.value);
            try {
                const res = await axios.post('/api/writeFile', {
                    componentName: componentName.value,
                    currentComponent: currentComponent ? currentComponent.outerHTML : null,
                    type: type.value
                });
                document.getElementById("check").setAttribute('fill', 'green');
                setTimeout(function() {
      document.getElementById("check").setAttribute("fill", "black");
    }, 3000);
            } catch (error) {
                
            }
        }

        return {
            submitChange
        }

        
    }
}
</script>

<style>

</style>