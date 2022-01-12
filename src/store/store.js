import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        benchmarks:[],
        results:[],
        graphs:[]
    },
    getters:{
        getBenchmarks(state){
            return state.benchmarks
        },
        getResults(state){
            return state.results
        },
        getGraphs(state){
            return state.graphs
        }
    },
    mutations:{
        setBenchmarks(state, benchmarks){
           state.benchmarks = benchmarks
        },
        setResults(state, results){
            state.results = results
        },
        setGraphs(state, graphs){
            state.graphs = graphs 
        }        
    },
    actions:{
        fetchBenchmarks(context){
            axios.get('http://133.186.134.206:18000/v1/pts/benchmarks/')
                .then(res=>context.commit('setBenchmarks',res.data))
        },
        fetchResults(context){
            axios.get('http://133.186.134.206:18000/v1/pts/results/')
                .then(res=>context.commit('setResults',res.data))
        },
        fetchGraphs(context){
            axios.get('http://133.186.134.206:18000/v1/pts/graphs/')
                .then(res=>context.commit('setGraphs',res.data))            
        }
    }
});




// vuex cheat sheet
// state:{
//     message: "hello vue.js"
// }

// {{ this.$store.state.message }}

// getters: {
//     getNumber(state){
//         return state.num
//     },
//     doubleNumber(state){
//         return state.num * 2
//     }
// }

// {{ this.$store.getters.getNumber }}

// mutations: {
//     printNumbers(state){
//         return state.num
//     },
//     sumNumbers(state, anotherNum){
//         return state.num + anotherNum;
//     },
//     modifyState(state, payload){
//         console.log(payload, str);
//         return state.storeNum += payload.num;
//     }
// }

// this.$store.commit('printNumbers');
// this.$store.commit('sumNumbers',20);
// this.$store.commit('modifyState',{
//     str: 'passed from payload',
//     num: 20
// })

// actions:{
//     fetchProductData(context){
//         return axios.get('')
//             .then(res=>context.commit('setData',res))
//     }
// }

// this.$store.dispatch('fetchProductData')