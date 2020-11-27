<template>
  <div v-if="movies.length">
    <div>
      <button @click="filterType('all')">
        All
      </button>
      <button @click="filterType('movie')">
        Movies
      </button>
      <button @click="filterType('series')">
        Series
      </button>
    </div>
    <MovieListItem v-for="movie in filteredMovies" :key="movie.imdbID" :movie="movie" />
    <div>
      <button @click="loadMore">
        Load More...
      </button>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { Movie } from '@/services/types';
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import MovieListItem from './MovieListItem.vue';

export default Vue.extend({
  name: 'MovieList',
  data() {
    return {
      type: 'all',
    };
  },
  computed: {
    ...mapGetters(['movies']),
    filteredMovies(): Movie[] {
      if (this.type === 'all') {
        return this.movies;
      }
      return this.movies.filter((item: Movie) => item.Type === this.type);
    },
  },
  methods: {
    ...mapActions(['loadMovies']),
    loadMore() {
      this.loadMovies();
    },
    filterType(type: string) {
      this.type = type;
    },
  },
  components: {
    MovieListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
