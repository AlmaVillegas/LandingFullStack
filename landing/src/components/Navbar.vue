<template>
   <div>
    <v-app-bar
      app
      color="#F2F9F5"
      dark
    >
      <div class="d-flex align-center v-responsive">
        <v-img
          class="shrink mr-2 v-responsive__content"
          contain
          transition="scale-transition"
          width="40"
        />
        <v-img

          class="shrink mt-1 hidden-sm-and-down v-responsive__content"
          contain
          min-width="100"
          src="../assets/LOGO-RAMPA.svg"
          width="100"
        />
       <div class="btn d-flex align-center v-responsive__content">
        <v-btn
            target="_blank"
            color="black"
            @click="$router.push('/about')"
            text>
           <span class="mr-2">Inicio</span>
        </v-btn>
        <v-btn
            target="_blank"
            color="black"
            @click="$router.push('/')"
            text>
           <span class="mr-2">Nosotros</span>
        </v-btn>
        <v-btn
            target="_blank"
            color="black"
            @click="$router.push('/about')"
            text>
           <span class="mr-2">Galeria</span>
        </v-btn>
        <v-btn
            target="_blank"
            color="black"
            @click="$router.push('/')"
            text>
           <span class="mr-2">Contacto</span>
        </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center v-responsive__content">
        <v-img
           class="spacing"
           src="../assets/FACEBOOK.svg"/>
        <v-img
           class="spacing"
           src="../assets/INSTAGRAM.svg"/>
        <v-img
           class="spacing"
           src="../assets/TWITTER.svg"/>
        <v-img
           class="spacing"
           src="../assets/TIKTOK.svg"/>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.font{
    font: normal normal 300 20px/24px;
    size: 20px;
    color: #000000;
}
.social{
    top: 40px;
    left: 1567px;
    width: 13px;
    height: 24px;
}
.spacing{
    margin: 30px;
}
.btn{
    top: 42px;
    left: 416px;
    width: 56px;
    height: 29px;
    text-align: left;
    font: normal normal 300 20px/24px Barlow;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}

</style>
