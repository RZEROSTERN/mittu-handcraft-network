// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase';

import App from './App'
import router from './router'

Vue.config.productionTip = false;

let app;
let config = {
  apiKey: "AIzaSyCQUezBQ7rV5w8I0o5yjn_JhVU1ZOQCa0g",
  authDomain: "mituu-handcraft.firebaseapp.com",
  databaseURL: "https://mituu-handcraft.firebaseio.com",
  projectId: "mituu-handcraft",
  storageBucket: "mituu-handcraft.appspot.com",
  messagingSenderId: "319155065369"
};

firebase.initializeApp(config);
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

