<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view></router-view>
      <Inicio/>
      <Nuestro/>
      <Banquete/>
      <Contacto/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Nuestro from './components/Nuestro'
import Contacto from './components/Contacto'
import Banquete from './components/Banquete'

export default {
  name: 'App',
  components: {
    Navbar,
    Inicio,
    Nuestro,
    Banquete,
    Contacto
  },

  data: () => ({
    //
  })
}
</script>
