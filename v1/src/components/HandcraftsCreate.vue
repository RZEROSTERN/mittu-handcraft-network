<template lang="pug">
  div.uk-container.uk-offcanvas-content
    div
      h1 Agregar un Producto
      p Por favor agrega los datos del producto que desees agregar
    form(enctype='multipart/form-data').uk-form-horizontal
      div.uk-margin
        label.uk-form-label(for="handcraft_name") Nombre del Producto
        div.uk-form-controls
          input.uk-input(type="text" v-model="product.handcraft_name" name="handcraft_name" id="handcraft_name")
      div.uk-margin
        label.uk-form-label(for="handcraft_category") Categoría
        div.uk-form-controls
          select#handcraft_category.uk-select(v-model="product.handcraft_category")
            option(value="" disabled) Seleccione una Categoría...
            option(v-for='item in products' :value="item.id") {{ item.name }}
      div.uk-margin
        label.uk-form-label(for="handcraft_dimensions") Dimensiones del Producto
        div.uk-form-controls
          input.uk-input(type="text" v-model="product.handcraft_dimensions" name="handcraft_dimensions" id="handcraft_dimensions")
      div.uk-margin
        label.uk-form-label(for="handcraft_materials") Materiales del Producto
        div.uk-form-controls
          input.uk-input(type="text" v-model="product.handcraft_materials" name="handcraft_materials" id="handcraft_materials")
      div.uk-margin
        label.uk-form-label(for="handcraft_website") Sitio Web del Producto
        div.uk-form-controls
          input.uk-input(type="text" v-model="product.handcraft_website" name="handcraft_website" id="handcraft_website")
      div.uk-margin
        label.uk-form-label(for="handcraft_description") Descripción del Producto
        div.uk-form-controls
          input.uk-input(type="text" v-model="product.handcraft_description" name="handcraft_description" id="handcraft_description")
      div.uk-margin
        label.uk-form-label(for="handcraft_materials") Fotografía del Producto
        div.uk-form-controls(uk-form-custom='')
          input(type='file')
          button.uk-button.uk-button-default(type='button', tabindex='-1') Seleccionar una imágen
    div.uk-margin.uk-text-center
        button.uk-button.uk-button-primary("v-on:click"="addProduct") Agregar Producto
    Offcanvas
</template>
<script>
  import fbs from '@/firebase-connector'

    let db = fbs.database()
    let productsRef = db.ref('products')

  export default {
    name: 'handcraft-create',
    data: function(){
      return {
        product:{
          handcraft_name: '',
          handcraft_category: '',
          handcraft_dimensions:'',
          handcraft_materials:'',
          handcraft_website: '',
          handcraft_description:''
        }
      }
    },
    firebase:{
      products:db.ref('categories')
    },
    methods:{
      addProduct: function(){
        productsRef.push(this.product);

        this.product.handcraft_name =  '',
        this.product.handcraft_category =  '',
        this.product.handcraft_dimensions = '',
        this.product.handcraft_materials = '',
        this.product.handcraft_website =  '',
        this.product.handcraft_description = ''
      }
    },
    mounted(){
      console.log(db.ref("categories"))
    }
  }
</script>
