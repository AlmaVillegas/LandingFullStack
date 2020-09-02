<template>
<div>
   <v-card color="#F2F9F5">
    <v-card-text class="text--primary">
     <v-row>
     <v-col justify="center">
      <div class="texto">NUESTROS SERVICIOS</div>
      <div class="texto2">PEQUEÑOS DETALLES QUE HACEN LA DIFERENCIA</div>
      <div class="size">
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>
      </div>
      </v-col>
      <v-col cols="12" sm="4">
      <v-card>
      <div class="city">
        Experiencias
      </div>
      <div class="text">
        Diseño de Eventos
      </div>
      <div class="content">Lorem ipsum dolor sit amet consectetur adipiscing elit fames libero,
          parturient cum aliquam varius tempor scelerisque dignissim a, porttitor cubilia est arcu congue lectus vestibulum himenaeos.
          Montes nec tincidunt ac morbi potenti augue tellus lectus dis, sociis ligula felis iaculis senectus dignissim at id fusce malesuada,
          tempus cubilia magnis sodales leo cum hendrerit rutrum. Iaculis parturient dis habitant dapibus auctor bibendum nisi erat,
          porta feugiat arcu dui eleifend dictumst per neque, ut commodo aliquam eu habitasse sociosqu mi. Conubia magnis per felis diam platea
          et turpis eleifend libero leo sociis, suspendisse quis commodo vel euismod mauris id gravida dui. Penatibus proin congue suscipit hac
          ridiculus dictumst nascetur sem cursus mauris rhoncus, dignissim vulputate semper accumsan morbi mollis sagittis orci hendrerit neque.
          Parturient varius interdum erat placerat dictum dis purus arcu integer vestibulum venenatis mattis, accumsan proin vulputate felis torquent
          eu taciti feugiat suscipit pellentesque sociis, convallis id turpis fermentum ullamcorper rhoncus fringilla potenti faucibus per tincidunt.</div>
      </v-card>
      </v-col>
     </v-row>
    </v-card-text>
  </v-card>
</div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: require('../assets/images/imagen1.png')
        },
        {
          src: require('../assets/images/imagen2.png')
        },
        {
          src: require('../assets/images/imagen3.png')
        }
      ]
    }
  }
}
</script>
<style>
.size{
    top: 1166px;
    left: 138px;
    width: 800px;
    height: 661px;
}
.texto{
    text-align: left;
    font: normal normal normal 60px/96px Barlow;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.texto2{
    text-align: left;
    font: normal normal 300 30px/96px Barlow;
    letter-spacing: 0px;
    color: #000000;
    text-transform: lowercase;
}
</style>
