> # DyteJs - Official State Management For DativeJs

![License](src/License-MIT-yellow.svg)
![Downloads](https://img.shields.io/npm/dt/dytejs)

# Installation
### Download
```html 
<script src="path/to/dative.min.js"></script>
<script src="path/to/dyte.min.js"></script>
```
### CDN
```html
<!--Development-->
<script src="https://cdn.jsdelivr.net/npm/dytejs@1.0.0/dist/dyte.js"></script>
<!--Production-->
<script src="https://cdn.jsdelivr.net/npm/dytejs@1.0.0/dist/dyte.min.js"></script>
```
## EsModule
```js
import Dyte from "https://cdn.jsdelivr.net/npm/dytejs@1.0.0/dist/dyte.es.min.js";
```

## npm

```bash
 npm install dytejs
```

```js 
import Dyte from 'dytejs'
```

## Get Started

> Note: Also Install dative when installing dyte

#### Simple Counter

```js
 import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';
 import Dyte from 'https://unpkg.com/dytejs@1.0.0/dist/dyte.es.min.js';
      
  Dative.use(Dyte);
     
  var store = new Dyte.Store({
    state:{
     count: 0
    },
    mutations:{
     increment(state){
        state.count++
     }
    },
    actions:{
     increase({ commit }){
      commit('increment')
     }
   }
  })
     
  var vm = new Dative({
    el: "#app",
    store: store,
    computed:{
      count(){
        return this.store.state.count
      }
    }
    template: function(){
     return `
        <h1>Testing dyte</h1>
        <p>Count: {{ count }}</p>
        <button on:click="counter">Add #1</button>
           `
    },
    methods:{
      counter: function(){
       this.store.dispatch('increase');
      }
    }
   })
vm.render();
```

# Plugin
Making a plugin for dyte

```js
  var plugin = function(store){
    store.subscribe((mutations,state)=>{
      if(mutations.type === "increment"){
        console.log(state.count)
      }
    })
  }
```
Installing the plugin with dyte

```js
  var store = new dyte.Store({
     state:{
       count: 0
     },
     mutations:{
       increment(state){
          state.count++
       }
     },
     actions:{
       increase({ commit }){
        commit('increment')
       }
     }
    plugins: [plugin]
  })
```
# Commit 

Commiting a mutation

```js
  mutations:{
     increment(state){
       state.count++
     }
  }
```
```js
  store.commit("increment")
```

# Dispatch

Dispatching an action

```js
  actions:{
   increase({ commit }){
     commit('increment')
   }
 }
```

```js
  store.dispatch("increase")
```

# Subscribe

Subscribing to a store

```js
  store.subscribe((mutations,state)=>{
    console.log(state.count)
  })
```