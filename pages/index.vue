<template>
  <section class="container">
    <navigation></navigation>
    <div class="title">
      Pop's Italian
    </div>
  </section>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
  components:{
    Navigation,
  }
}
</script>

<style>

body, html{
  max-height: 100vh
}

</style>
