<template>
  <v-app>
    <v-main>
      <benchmark-table></benchmark-table>
    </v-main>
  </v-app>
</template>

<script>
import BenchmarkTable from './components/BenchmarkTable';

export default {
  name: 'App',

  components: {
    BenchmarkTable,
  },

  data: () => ({
    //
  }),
};
</script>
