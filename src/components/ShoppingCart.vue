<template>
  <div class="shopping-cart">

    <div class="title">
      Shopping Cart
    </div>

    <div class="item" >
      <CartItem v-for = "(item,index) in cartData"
                :key="index"
                :cartItemData="item"
                @deleteFromCart="deleteFromCart(index)"
      ></CartItem>
    </div>
  </div>

</template>

<script>
 import CartItem from '../components/CartItem';
 import { mapActions} from "vuex";


 export default {
  name:"shopping-cart",
  components: {
    CartItem
  },
  data() {
    return {
    }
  },
  props:{
    show: {
      type:Boolean
    },
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
     this.DELETE_FROM_CART(index)
    }
  },

}
</script>

  <style scoped>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      background-color: #7EC855;
      font-family: 'Roboto', sans-serif;
    }

    .shopping-cart {
      width: 80%;
      height:auto;
      margin: 80px auto;
      background: #FFFFFF;
      box-shadow: 1px 2px 3px 0 rgba(0,0,0,0.10);
      border-radius: 6px;

      display: flex;
      flex-direction: column;
    }

    .title {
      height: auto;
      border-bottom: 1px solid #E1E8EE;
      padding: 20px 30px;
      color: #5E6977;
      font-size: 18px;
      font-weight: 400;
    }

    .item {
      padding: 20px 30px;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    .item:nth-child(3) {
      border-top:  1px solid #E1E8EE;
      border-bottom:  1px solid #E1E8EE;
    }

  </style>

