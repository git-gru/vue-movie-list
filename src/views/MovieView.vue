<template>
  <div v-if="Object.keys(movieData).length" class="movie-view">
    <h1>{{ movieData.Title }}</h1>

    <img :src="movieData.Poster" />
    <div class="movie-detail">
      <div>Year: {{ movieData.Year }}</div>
      <div>Type: {{ movieData.Type }}</div>
      <div>Rated: {{ movieData.Rated }}</div>
      <div>Released: {{ movieData.Released }}</div>
      <div>Production: {{ movieData.Production }}</div>
      <div>Plot: {{ movieData.Plot }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import { MovieDetail } from '../services/types';

export default Vue.extend({
  name: 'MovieView',

  data() {
    return {
      movieData: {} as MovieDetail,
    };
  },

  async created() {
    await this.loadMovie();
  },

  methods: {
    async loadMovie() {
      this.movieData = await MovieService.movieService.getSpecificMovie(
        process.env.VUE_APP_OMDB_API_KEY,
        this.$route.params.movieId,
      );
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-view {
  .movie-detail {
    text-align: center;
  }
}
</style>
