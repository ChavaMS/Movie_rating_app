<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn text v-bind:to="`/movies/${movie._id}`">{{ movie.name }}</v-btn>
              </div>
            <span class="grey-text">
              {{ movie.release_year }} . {{ movie.genre }}
            </span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
<!--   <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="grey--text">2016. Pelicula de Ciencia ficción/Acción. 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Han pasado casi dos años desde que la colosal batalla de Superman (Henry Cavill) con Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas y los daños colaterales hicieron que muchos se sintieran enojados e indefensos, incluido el multimillonario Bruce Wayne (Ben Affleck) que lucha contra el crimen. Convencido de que Superman es ahora una amenaza para la humanidad, Batman se embarca en una venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="purple">Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs4>
      <v-card>
        <v-card-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="grey--text">2016. Pelicula de Ciencia ficción/Acción. 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Han pasado casi dos años desde que la colosal batalla de Superman (Henry Cavill) con Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas y los daños colaterales hicieron que muchos se sintieran enojados e indefensos, incluido el multimillonario Bruce Wayne (Ben Affleck) que lucha contra el crimen. Convencido de que Superman es ahora una amenaza para la humanidad, Batman se embarca en una venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="purple">Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs4>
      <v-card>
        <v-card-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="grey--text">2016. Pelicula de Ciencia ficción/Acción. 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Han pasado casi dos años desde que la colosal batalla de Superman (Henry Cavill) con Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas y los daños colaterales hicieron que muchos se sintieran enojados e indefensos, incluido el multimillonario Bruce Wayne (Ben Affleck) que lucha contra el crimen. Convencido de que Superman es ahora una amenaza para la humanidad, Batman se embarca en una venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="purple">Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
        <v-flex xs4>
      <v-card>
        <v-card-title>
          <div>
            <div class="headline">Batman vs Superman</div>
            <span class="grey--text">2016. Pelicula de Ciencia ficción/Acción. 3h 3m</span>
          </div>
        </v-card-title>
        <v-card-text>
          Han pasado casi dos años desde que la colosal batalla de Superman (Henry Cavill) con Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas y los daños colaterales hicieron que muchos se sintieran enojados e indefensos, incluido el multimillonario Bruce Wayne (Ben Affleck) que lucha contra el crimen. Convencido de que Superman es ahora una amenaza para la humanidad, Batman se embarca en una venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="purple">Reseñar esta pelicula</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Logan</div>
            <span class="grey--text">2017 . Pelicula Drama/Ciencia Ficción</span>
          </div>
        </v-card-title>
        <v-card-text>
          En un futuro cercano, un cansado Logan (Hugh Jackman) cuida de un enfermo Profesor X (Patrick Stewart) en un puesto remoto en la frontera mexicana. un joven protector Su plan para esconderse del mundo exterior se trastorna cuando conoce a un mutante (Dafne Keen) que se parece mucho a él. Logan ahora debe ser la chica y luchar contra las fuerzas oscuras que quieren capturarla.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="purple">Reseñar esta pelicula</v-btn>
        <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> -->
</template>
<script>
import axios from 'axios'
export default {
  name: 'Movies',
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/movies'
      }).then((response) => {
        this.movies = response.data.movies
      }).catch(() => {
      })
    }
  }
}
</script>
