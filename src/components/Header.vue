<template>
<ul>
  <router-link as="li" :to="{name: 'Home'}" exact>Home</router-link>
  <router-link as="li" :to="{name: 'Todos'}">Todos</a></router-link>
  <router-link as="li" :to="{name: 'Services'}">Services</a></router-link>
</ul>
</template>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
