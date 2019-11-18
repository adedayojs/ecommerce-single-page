<template>
  <div class="container-fluid mt-2">
    <div class="row justify-content-center">
      <div class="col-7">
        <carousel
          :per-page="1"
          :navigate-to="someLocalProperty"
          :mouse-drag="false"
          :autoplay="true"
          :loop="true"
        >
          <slide
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img src="../assets/banner.png" />
          </slide>
          <slide
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img src="../assets/banner.png" />
          </slide>
          <slide
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img src="../assets/banner.png" />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    }
  };
</script>
<style scoped></style>
