<template>
  <v-container>
  <!-- <line-graph></line-graph>
  <column-graph></column-graph>
  <bar-graph></bar-graph> -->
  <div class="text-center pt-2">
    <v-btn
      color="primary"
      class="mr-2"
      @click="ClickViewReportButton"
    >
      Click to View Report
    </v-btn>
    <p style="display: inline;">{{"selected results : " + selected.length}}</p>
  </div>
  <v-card-title>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="benchmarks"
    :items-per-page="30"
    :search="search"
    v-model="selected"
    :single-select="singleSelect"
    item-key="pts_result_id"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
  </v-container>
</template>

<script>
  // import {mapGetters} from 'vuex'
  // import LineGraph from './LineGraph.vue'
  // import ColumnGraph from './ColumnGraph.vue'
  // import BarGraph from './BarGraph.vue'
  
  export default {
    // components:{LineGraph, ColumnGraph, BarGraph},
    name: 'BenchmarkTable',
    data: () => ({
          // report_url:"",
          search: '',
          singleSelect: false,
          selected: [],
          headers: [
            {
              text: 'PTS_RESULT_ID',
              align: 'start',
              sortable: true,
              value: 'pts_result_id',
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
    methods:{
      ClickViewReportButton(){
        let pts_result_list = this.selected.map((benchmark)=>{
            return benchmark.pts_result_id
        })
        let report_url = "http://133.186.134.206/public.php?t=result&ut=" + pts_result_list.join(',');        
        window.open(report_url); 


        // const t = document.createElement("textarea");
        // document.body.appendChild(t);
        // t.value = report_url;
        // t.select();
        // document.execCommand('copy');
        // document.body.removeChild(t);

        // alert("Copied the URL : " + report_url);
      }
    },
    computed:{
      benchmarks(){
        // console.log(this.$store.getters.getBenchmarks);
        return this.$store.getters.getBenchmarks.filter((benchmark)=>{return benchmark.pts_result_id});

      }
      // ...mapGetters(['getBenchmarks'])
    },
    created(){
        this.$store.dispatch('fetchBenchmarks')
    }
  }
</script>
