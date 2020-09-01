<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Inicio/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'

export default {
  name: 'App',
  components: {
    Navbar,
    Inicio
  },

  data: () => ({
    //
  })
}
</script>
