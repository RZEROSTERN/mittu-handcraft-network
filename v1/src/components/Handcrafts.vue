<template lang="pug">
  div.uk-container.uk-offcanvas-content
    div.uk-grid
      h1 Mis Productos
    div.uk-grid
      div.uk-card.uk-card-default(class='uk-width-1-3@m' v-for='item in products')
        div.uk-card-media-top
          img(src='http://via.placeholder.com/400x250', alt='')
        div.uk-card-body
          h3.uk-card-title {{ item.handcraft_name }}
          p {{ item.handcraft_description }}
        div.uk-card-footer
          dl.uk-description-list
            dt Materiales
            dd {{ item.handcraft_materials }}
            dt Dimensiones
            dd {{ item.handcraft_dimensions }}
    Offcanvas
</template>
<script>
  import fbs from '@/firebase-connector'

  let db = fbs.database()
  let productsRef = db.ref('products')

  export default {
    name:'handcrafts',
    firebase:{
      products: productsRef
    }
  }
</script>
