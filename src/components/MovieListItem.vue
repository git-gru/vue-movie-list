<template>
<div>
  <router-link :to="`/movies/${movie.imdbID}`">
    {{ movie.Title }}
  </router-link>
</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
    } as PropOptions<Movie>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
