import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyCQUezBQ7rV5w8I0o5yjn_JhVU1ZOQCa0g",
  authDomain: "mituu-handcraft.firebaseapp.com",
  databaseURL: "https://mituu-handcraft.firebaseio.com",
  projectId: "mituu-handcraft",
  storageBucket: "mituu-handcraft.appspot.com",
  messagingSenderId: "319155065369"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
