<template>
  <div class="modal-backdrop"
       @click="closeModal">
    <div class="shopping-cart">
      <div class="shopping-cart-content"
           @click.stop
      >

          <div class="title">
            Shopping Cart
          </div>
          <div class="empty-cart">
            <p v-if="!cartData.length">There are no products in cart...</p>
          </div>

          <div class="item" >
            <CartItem v-for = "(item,index) in cartData"
                      :key="index"
                      :cartItemData="item"
                      @deleteFromCart="deleteFromCart(index)"
                      @addQuantity="addQuantity(index)"
                      @deleteQuantity="deleteQuantity(index)"
            ></CartItem>
          </div>

          <div class="totalCart">
            <p v-if="cartData.length">Total amount: ${{  totalPriceOfProducts }}</p>
          </div>

          <div class="checkout" v-if="cartData.length">
            <button class="btn-checkout">
              <a href="#">Сheckout</a>
            </button>
          </div>

      </div>
    </div>
  </div>



</template>

<script>

 import CartItem from '../components/CartItem';
 import {mapActions, mapGetters} from "vuex";

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
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    totalPriceOfProducts() {
      let sum = 0;
      for (let i=0; i<this.cartData.length; i++)
      sum += this.cartData[i].totalPrice;
      return sum
    }

  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'ADD_QUANTITY_TO_CART',
      'DELETE_QUANTITY_FROM_CART'
    ]),
    deleteFromCart(index) {
     this.DELETE_FROM_CART(index)
    },
    addQuantity(index) {
      this.ADD_QUANTITY_TO_CART(index)

    },
    deleteQuantity(index) {
      this.DELETE_QUANTITY_FROM_CART(index)
    },
    closeModal() {
      this.$emit('close');
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

    .modal-backdrop {
      position: absolute;
      z-index: 3;
      top: 140px;/* Сидеть на вершине */
      left: 0;
      right: 0;
      overflow: auto; /* Включите прокрутку, если это необходимо */
      background-color: rgb(0,0,0); /* Цвет запасной вариант */
      background-color: rgba(0,0,0,0.4); /* Черный с непрозрачностью */
    }


    .shopping-cart {
      width: 50%;
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

    .empty-cart p {
      height: auto;
      border-bottom: 1px solid #E1E8EE;
      padding: 20px 30px;
      color: #5E6977;
      font-size: 14px;
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

    .totalCart p {
      height: auto;
      border-bottom: 1px solid #E1E8EE;
      padding: 20px 30px 20px 80%;
      color: #5E6977;
      font-size: 16px;
      font-weight: 700;
    }

    .checkout {
      display: flex;
      justify-content: flex-end;
      margin: 10px 30px;
      height: 40px;

    }
    .btn-checkout {
      right: 0;
      border:1px solid #f87272;
      background: #f87272;
    }

    .btn-checkout a {
      margin: 8px 20px 3px;
      color:#ffffff;
      text-decoration: none;
      font-size: 16px;
    }
  </style>

