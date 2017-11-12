// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import firebase from 'firebase';

import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import Offcanvas from './components/OffcanvasMenu.vue'
import firebase from './firebase-connector'

Vue.config.productionTip = false;

Vue.use(Vuefire);
Vue.component('Offcanvas', Offcanvas);

let app;

firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App }
    });

  }
});

