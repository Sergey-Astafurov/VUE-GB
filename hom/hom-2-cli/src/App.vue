<template>
 <HeaderComp/>
 <router-view></router-view>
 <FooterComp/>
</template>

<script>

import FooterComp from './components/Footer-comp.vue';
import HeaderComp from './components/Header-comp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
}
}
</script>

<style lang="scss">



</style>
