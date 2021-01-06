<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Nombre"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      name="input-7-1"
      label="Descripción"
      v-model="description"
      required
      multi-line
    ></v-text-field>
    <v-select
      label="Año de publicación"
      v-model="release_year"
      :rules="releaseRules"
      required
      :items="years"
    ></v-select>
    <v-text-field label="Género" v-model="genre" required :rules="genreRules"></v-text-field>
    <v-btn @click="submit" :disabled="!valid">Guardar</v-btn>
    <v-btn @click="clear" :disabled="!valid">Limpiar</v-btn>
  </v-form>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    name: '',
    description: '',
    genre: '',
    release_year: '',
    nameRules: [(v) => !!v || 'Nombre de la película requerido'],
    genreRules: [
      v => !!v || 'El género de la película es requerido',
      v => !!(v && v.length <= 80) || 'El género debe ser de 80 caracteres o menos'
    ],
    releaseRules: [
      v => !!v || 'Se requiere la fecha de publicación'
    ],
    select: null,
    years: ['2020', '2019', '2018', '2017', '2016', '2015']
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        return axios({
          method: 'post',
          data: {
            name: this.name,
            description: this.description,
            release_year: this.release_year,
            genre: this.genre
          },
          url: 'http://localhost:8081/movies',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
          this.$swal('¡Grandioso', 'Pelicula agregada satisfactoriamente!', 'success')
          this.$router.push({
            name: 'Home'
          })
          this.$refs.form.reset()
        }).catch((err) => {
          console.log(err)
          this.$swal('Ha ocurrido un problema', 'No se pudo grabar la pelicula', 'error')
        })
      }
      return true
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
