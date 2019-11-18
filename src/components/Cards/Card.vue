<template>
  <div class="card-cont animate-zoom">
    <img :src="image" width="90%" />
    <div class="content">
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
  .content {
    background: rgba(223, 224, 217, 0.39);
    margin: 1em;
    padding: 0.5em;
  }
  .card-cont:hover {
    opacity: 0.7;
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
</style>
