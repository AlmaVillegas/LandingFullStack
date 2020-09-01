<template>
<div>
  <v-card>
   <v-img class="banner" src="../assets/banner.png"/>
  </v-card>
   <v-card>
    <v-card-text class="text--primary">
     <v-row>
     <v-col justify="center">
      <div class="bien">Bienvenido A</div>
      <v-img
         class="img"
         src="../assets/LOGO-RAMPA.svg"/>
     </v-col>
     <v-col>
      <div class="city">
        Guadalajara, Jalisco, México
      </div>
      <div class="text">
        DÉ A SUS INVITADOS UNA RAZÓN PARA ASOMBRARSE
      </div>
      <div class="content">Desde lujosas bodas ambientadas con caminos llenos de flores de los lugares históricos de Guadalajara y sus alrededores, hasta elaborados eventos corporativos que fomentan las conexiones de la compañía, RAMPA IIII tiene el don de transformar las celebraciones significativas en experiencias inolvidables.</div>
     </v-col>
     </v-row>
    </v-card-text>
  </v-card>
</div>
</template>
<script>
export default {
}
</script>
<style>
.banner{
   text-align: center;
   font: normal normal 300 65px/96px DIN Next LT Pro;
   letter-spacing: 0px;
   color: #000000;
   text-transform: uppercase;
   opacity: 1;
}
.img{
  width: 274px;
  height: 47px;
  top: 10px;
  margin-left: 100px;
  opacity: 1;
}
.text{
    text-align: left;
    font: normal normal medium 20px/24px Barlow;
    letter-spacing: 0px;
    color: #A5D5BB;
    opacity: 1;
    top: 20px;
}
.content {
    text-align: left;
    font: normal normal normal 18px/26px DIN Next LT Pro;
    letter-spacing: 0px;
    opacity: 1;
}
.city{
    text-align: left;
    top: 733px;
    font: normal normal 300 20px/28px DIN Next LT Pro;
    letter-spacing: 1.04px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
}
.bien{
    text-align: center;
    font: normal normal 300 65px/96px DIN Next LT Pro;
    letter-spacing: 0px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
}
</style>
