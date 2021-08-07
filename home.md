> # VadexJs - Official State Management For DativeJs

![License](src/License-MIT-yellow.svg)
# Installation
### Download
```html 
<script src="path/to/dative.min.js"></script>
<script src="path/to/vadex.min.js"></script>
```
### CDN
```html
<!--Development-->
<script src="https://cdn.jsdelivr.net/gh/vadexjs/vadexjs@main/dist/vadex.js"></script>
<!--Production-->
<script src="https://cdn.jsdelivr.net/gh/vadexjs/vadexjs@main/dist/vadex.min.js"></script>
```
## EsModule
```js
import Vadex from "https://cdn.jsdelivr.net/gh/vadexjs/vadexjs@main/dist/vadex.es.min.js";
```

## Get Started

> Note: Also Install dative when installing vadex

#### Simple Counter

```js
 import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';
 import Vadex from 'https://cdn.jsdelivr.net/gh/vadexjs/vadexjs@main/dist/vadex.es.min.js';
      
  Dative.use(Vadex);
     
  var store = new Vadex.Store({
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
        <h1>Testing vadex</h1>
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
Making a plugin for vadex

```js
  var plugin = function(store){
    store.subscribe((mutations,state)=>{
      if(mutations.type === "increment"){
        console.log(state.count)
      }
    })
  }
```
Installing the plugin with vadex

```js
  var store = new vadex.Store({
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

________________________________________________

© Copyright 2021 made by [Tobithedev](https://github.com/Tobithedev) and [Vadex Team](https://github.com/vadex)