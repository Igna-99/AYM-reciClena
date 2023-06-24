<script>
import { superStore } from './components/store/superStore';

export default {
  data() {
    return {
      store: superStore()
    }
  },
  methods: {


  },
  async created() {
    let aux = await this.store.logIn("email 1","clave 1")

    console.log(aux)

  } 

}
</script>


<template>

<div>
  123213123123123
</div>

</template>


<style scoped>

</style>
