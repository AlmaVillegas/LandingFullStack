<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Inicio/>
      <Contacto/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'

export default {
  name: 'App',
  components: {
    Navbar,
    Inicio,
    Contacto
  },

  data: () => ({
    //
  })
}
</script>
