<template>
  <div class="card-cont animate-zoom">
    <img :src="image" width="90%" />
    <div>
      <h5 class="m-1">Name: {{ name }}</h5>
      <div class="row">
        <span class="col"><strong>Amount:</strong> {{ amount }}</span>
        <span class="text-left col"
          ><strong>Amount In Stock:</strong> {{ rating }}</span
        >
      </div>
      <p><strong>Product Details:</strong> {{ description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: String,
      name: String,
      amount: String,
      description: String,
      rating: String
    }
  };
</script>

<style scoped>
  img {
    margin-left: 1em;
  }
  .card-cont {
    margin: auto;
  }

  .animate-zoom {
    animation: animatezoom 0.6s;
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .w3-animate-input {
    transition: width 0.4s ease-in-out;
  }
  .w3-animate-input:focus {
    width: 100% !important;
  }
</style>
