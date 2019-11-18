<template>
  <section>
    <Header />
    <Banner />
    <Body />
  </section>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Header from './components/Header';
  import Banner from './components/Banner';
  import Body from './components/Body';

  export default {
    name: 'app',
    components: {
      Header,
      Banner,
      Body
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
