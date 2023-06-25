<script>
import { superStore } from '../store/superStore';

export default {
  data() {
    return {
      store: superStore()
    }
  },
  methods: {


  },
  async created() {

  } 

}
</script>


<template>

<div>
  SOY EL HOME
</div>


<div v-if="this.store.isLogged">
  estoy logeado
</div>
<div v-else>
  no estoy logeado
</div>



</template>


<style scoped>

</style>
