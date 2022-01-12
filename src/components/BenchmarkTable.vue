<template>
  <v-container>
  <v-data-table
    :headers="headers"
    :items="benchmarks"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-container>
</template>

<script>
  // import {mapGetters} from 'vuex'
  export default {
    name: 'BenchmarkTable',
    data: () => ({
              headers: [
          {
            text: 'uuid',
            align: 'start',
            sortable: false,
            value: 'uuid',
          },
          { text: 'CSP', value: 'csp' },
          { text: 'FlAVOR', value: 'flavor' },
          { text: 'TEST_SUITE', value: 'test_suite' },
          { text: 'DATE', value: 'date' },
          { text: 'STATUS', value: 'status' },
        ],
        // benchmarks: [
        //   {
        //       "uuid": "9J3XBT7n90N7",
        //       "csp": "NHN",
        //       "flavor": "m2.c2m4",
        //       "test_suite": "tmp-test",
        //       "date": "2022-01-10T19:00:48.782475+09:00",
        //       "start_datetime": null,
        //       "end_datetime": null,
        //       "status": "INSTANCE_CREATED"
        //   },
        //   {
        //       "uuid": "uYULfJgCVMXy",
        //       "csp": "NHN",
        //       "flavor": "m2.c2m4",
        //       "test_suite": "tmp-test",
        //       "date": "2022-01-10T16:01:11.208235+09:00",
        //       "start_datetime": null,
        //       "end_datetime": null,
        //       "status": "INSTANCE_CREATED"
        //   }
        // ]
    }),
    computed:{
      benchmarks(){
        // console.log(this.$store.getters.getBenchmarks);
        return this.$store.getters.getBenchmarks;

      }
      // ...mapGetters(['getBenchmarks'])
    },
    created(){
        this.$store.dispatch('fetchBenchmarks')
    }
  }
</script>
