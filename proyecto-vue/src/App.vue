<template>

   <div>

      <Usuario/>
      <Datos/>
   </div>


</template>

<script>
import Datos from './components/Datos'
import Usuario from './components/Usuario'

export default {
  name: 'App',
  components: {
    Datos,
    Usuario
  },
  data () {
    return {
      //
    }
  }
}
</script>
