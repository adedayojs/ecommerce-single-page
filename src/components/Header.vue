<template>
<div class="container-fluid p-3 header">

  <div class="row justify-content-around">
    <div class="col-4">
      <img src="../assets/9pay.png" alt="9pay">
    </div>
    <div class="col-2 align-self-center">
      <span>Login</span>
      <span>Need Help ?</span>
    </div>
  </div>
  
</div>
</template>

<script>

export default {
  name: 'Header',

}
</script>

<style scoped>
    span{
        margin:0 1em
    }
    *{
        color:white
    }
    .header{
        background: #368e3d
    }
</style>
