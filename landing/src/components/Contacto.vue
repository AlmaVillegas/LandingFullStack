<template>
  <div>
   <v-card color="#F2F9F5">
    <v-card-text class="text--primary">
     <v-row>
     <v-col justify="center">
      <div class="information">Solicitar Información</div>
      <div class="date">Miercoles 2 DE Septiembre <span class="year">2020</span></div>
       <v-row class="margen">
         <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="nombre"
            label="Nombre Completo"
            single-line
            color="teal"
            required
          ></v-text-field>
        </v-col>
       </v-row>
       <v-row class="margen">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="correo"
            color="teal"
            label="Correo electronico"
            single-line
            required
          ></v-text-field>
        </v-col>
       </v-row>
       <v-row class="margen">
        <v-col cols="12" sm="6" md="4">
          <v-select
            :items="items"
            color="teal"
            v-model="TipoEvento"
            label="Tipo de evento"
          ></v-select>
        </v-col>
       </v-row>
       <v-row class="margen">
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
          <template v-slot:activator="{ on, attrs }">
           <v-text-field
              v-model="dateFormatted"
              color="teal"
              label="Fecha de evento estimada"
              persistent-hint
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-textarea
            class="margen1"
            color="teal"
            v-model="mensaje"
            label="Mensaje">
          </v-textarea>
        </v-col>
       </v-row>
     </v-col>
     </v-row>
      <div class="text-center">
          <v-btn class="btn-send" @click="Insert" color="#A5D5BB">Enviar</v-btn>
      </div>
    </v-card-text>
   </v-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nombre: '',
      correo: '',
      TipoEvento: '',
      fecha: '',
      mensaje: '',
      items: ['Infantil', 'Familiar', 'Amigos'],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false
    }
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  methods: {
    Insert () {
      this.axios.post('/contact', {
        nombre: this.nombre,
        email: this.correo,
        TipoEvento: this.TipoEvento,
        Fecha: this.date,
        mensaje: this.mensaje
      }).then(response => {
        console.log(response)
        this.Clear()
      }).catch(e => {
        console.log(e)
      })
    },
    Clear () {
      this.nombre = ''
      this.correo = ''
      this.TipoEvento = ''
      this.fecha = ''
      this.mensaje = ''
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  }
}
</script>
<style>
.information{
    text-align: left;
    font: normal normal normal 35px/96px Barlow;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    text-transform: uppercase;
}
.date{
    text-align: left;
    font: normal normal normal 29px/96px Barlow;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    text-transform: uppercase;
}
.label{
    width: 248px;
    height: 40px;
    text-align: right;
    font: normal normal normal 25px/96px Barlow;
    letter-spacing: 0px;
    opacity: 1;
}
.year{
    text-align: left;
    font: italic normal medium 106px/96px DIN Next LT Pro;
    letter-spacing: 0px;
    color: #A5D5BB;
    opacity: 1;
}
.btn-send{
    width: 336px;
    height: 309px;
    background: #A5D5BB 0% 0% no-repeat padding-box;
    border-radius: 55px;
    opacity: 1;
}
.text-fiel{
    top: 3773px;
    left: 362px;
    width: 460px;
    height: 0px;
    border: 1px solid #A5D5BB;
    opacity: 1;
}
.margen{
    margin-left: 70px;
}
.margen1{
    margin: 70px;
}
</style>
