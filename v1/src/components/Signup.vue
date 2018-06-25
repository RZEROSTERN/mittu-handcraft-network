<template lang="pug">
  div.uk-container
    div.uk-width-1-2.uk-card.uk-card-default.uk-card-body.uk-align-center
      form.uk-margin-large
        div.uk-margin
          label.uk-form-label(for="email")
          div.uk-form-controls
            input.uk-input(type="text" placeholder="Correo Electrónico" v-model="email" name="email" id="email")
        div.uk-margin
          label.uk-form-label(for="password")
          div.uk-form-controls
            input.uk-input(type="password" v-model="password" name="password" id="password" placeholder="Contraseña")
        div.uk-margin.uk-text-center
          button.uk-button.uk-button-primary("v-on:click"='signUp', type="button") Registrar Usuario
        div.uk-margin.uk-text-center
          a(href="/login") Iniciar Sesión
</template>
<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function(){
        console.log(this.email);
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('dashboard')
          },
          (err) => {
            alert(err.message)
          }
        );
      }
    }
  }
</script>
