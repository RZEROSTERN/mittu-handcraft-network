<template lang="pug">
  div.uk-container
    div.uk-width-1-2.uk-card.uk-card-default.uk-card-body.uk-align-center
      form.uk-margin-large
        div.uk-margin
          label.uk-form-label(for="email")
          div.uk-form-controls
            input.uk-input(type="text" v-model="email" placeholder="Correo Electrónico" name="email" id="email")
        div.uk-margin
          label.uk-form-label(for="password")
          div.uk-form-controls
            input.uk-input(type="password" v-model="password" name="password" id="password" placeholder="Contraseña")
        div.uk-margin.uk-text-center
          button.uk-button.uk-button-primary("v-on:click"='signIn', type="button") Iniciar Sesión
        div.uk-margin.uk-text-center
          button.uk-button.uk-button-primary("v-on:click"='signInFacebook', type="button") Iniciar Sesión con Facebook
        div.uk-margin.uk-text-center
          a(href="/signup") Regístrate
</template>
<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('dashboard')
          },
          (err) => {
            alert("Nombre de usuario o contraseña incorrectos.")
          }
        );
      },
      signInFacebook: function(){
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("user_birthday");

        firebase.auth().languageCode = 'es_MX';

        provider.setCustomParameters({
          'display': 'popup'
        });

        firebase.auth().signInWithPopup(provider).then(
          (result) => {
            this.$router.go('dashboard')
          }
        ).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
      }
    }
  }
</script>
