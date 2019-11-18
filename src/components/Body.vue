<template>
  <div>
    <!-- Filter Section Just before items are loaded -->
    <div class="row justify-content-center m-4">
      <span>Filter By Name or anything: </span>
      <br />
      <input type="text" v-on:keyup="changeHandler" v-model="filter" />
    </div>

      <h1 class="text-center">Phones</h1>
    <!-- Phone Product display section -->
    <div class="row justify-content-center m-4">
      <br />
      <Card
        class="col-3 card m-4 p-2"
        v-for="card in filtered"
        v-bind:key="card.name"
        :image="require('../assets/item.png')"
        :name="card.name"
        :amount="card.price"
        :description="card.description"
        :rating="card.rating"
      />
    </div>
      
      
      <h1 class="text-center">Bags</h1>
    <!-- Phone Product display section -->
    <div class="row justify-content-center m-4">
      <br />
      <Card
        class="col-3 card m-4 p-2"
        v-for="card in filtered"
        v-bind:key="card.name"
        :image="require('../assets/item.png')"
        :name="card.name"
        :amount="card.price"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script>
  import Card from './Cards/Card.vue';
  export default {
    components: {
      Card
    },
    data() {
      return {
        filter: '',
        filtered: '',
        arrayOfItems: ''
      };
    },
    beforeMount() {
      // Mock Api Data
      this.arrayOfItems = [
        {
          name: 'Product 1',
          description:
            'TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
          price: '50,000',
          rating: '5'
        },
        {
          name: 'Samfeolu 1',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '500,000',
          rating: '5'
        },
        {
          name: 'Tesla 2',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,000',
          rating: '3'
        },
        {
          name: 'Infinix 3',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,000',
          rating: '2'
        },
        {
          name: 'Samsung 4',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,000',
          rating: '3'
        },
        {
          name: 'Tecno 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,000',
          rating: '5'
        },
        {
          name: 'Tecno 7',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,000',
          rating: '5'
        },
        {
          name: 'Iphone 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '56,000',
          rating: '5'
        },
        {
          name: 'Tesla 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '50,020',
          rating: '5'
        },
        {
          name: 'Siemen 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '37,000',
          rating: '5'
        },
        {
          name: 'Motorola 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '56,000',
          rating: '5'
        },
        {
          name: 'Sam 6',
          description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ',
          price: '10,000',
          rating: '5'
        }
      ];
      this.changeHandler();
    },
    methods: {
      changeHandler() {
        this.filtered = this.arrayOfItems.filter(obj => {
          // Search through the values of the provided object and determine
          // if any of it values contain the filter item
          return Object.values(obj).some(value =>
            value.match(new RegExp(this.filter, 'i'))
          );
        });
      }
    }
  };
</script>
<style scoped>
  span {
    margin: auto 2em;
  }
</style>
