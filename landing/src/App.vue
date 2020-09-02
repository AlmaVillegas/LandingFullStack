<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Inicio/>
      <Nuestro/>
      <Contacto/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Nuestro from './components/Nuestro'
import Contacto from './components/Contacto'

export default {
  name: 'App',
  components: {
    Navbar,
    Inicio,
    Nuestro,
    Contacto
  },

  data: () => ({
    //
  })
}
</script>
