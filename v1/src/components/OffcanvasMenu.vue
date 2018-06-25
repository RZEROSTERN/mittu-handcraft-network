<template lang="pug">
  div#offcanvas-reveal(uk-offcanvas='mode: reveal; overlay: true')
    div.uk-offcanvas-bar
      button.uk-offcanvas-close(type='button', uk-close='')
      ul.uk-nav.uk-nav-default
        li.uk-parent
          a(href='/dashboard') Dashboard
        li.uk-parent
          a(href='/handcrafts') Mis Productos
          ul.uk-nav-sub
            li
              a(href='/handcrafts/create') Agregar Producto
        li.uk-nav-header Opciones
        li
          a(href='/network')
            span.uk-margin-small-right(uk-icon='icon: users')
            |  Red de Artesanos
        li
          a(href='/settings')
            span.uk-margin-small-right(uk-icon='icon: settings')
            |  Configuración
        li
          a(href='/logout')
            span.uk-margin-small-right(uk-icon='icon: sign-out')
            |  Cerrar Sesión
</template>
