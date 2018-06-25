<template lang="pug">
  div.uk-container
    div.uk-alert-success
      p {{ msg }}
</template>
<script>
  import firebase from 'firebase'

  export default {
    name: 'logout',
    data(){ return {msg:'Cerrando Sesión...'}},
    mounted:function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      })
    }
  }
</script>
