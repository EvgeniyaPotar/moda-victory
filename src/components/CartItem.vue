<template>
       <div class="cartItem">
         <img :src='cartItemData.photo' alt="" class="cartItem-image">
         <div class="cartItem-info">
           <p>{{ cartItemData.nameProduct }}</p>
           <p>${{ cartItemData.price }}</p>
         </div>

         <div class="cartItem-quantity">
              <button class="quantity-plus"
                      @click="addQuantity"
              >+</button>
              <p>{{ cartItemData.quantity }}</p>
              <button class="quantity-minus"
                      @click="deleteQuantity"
              >-</button>
         </div>
         <div class="cartItem-total-price" >
           <p>${{ cartItemData.price*cartItemData.quantity }}</p>
         </div>
         <button @click="deleteFromCart">X</button>
       </div>
</template>

<script>
export default {
  name: "cartItem",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    deleteFromCart() {
    this.$emit('deleteFromCart')
    },
    addQuantity() {
    this.$emit('addQuantity')
    },
    deleteQuantity() {
      this.$emit('deleteQuantity')
    }
  }
}
</script>

<style scoped>
 .cartItem {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0 8px 0 #e0e0e0;
   padding: 5px;
   margin-bottom: 10px;
   width: 100%;
 }
.cartItem-image{
  max-width: 25%;
}
 .cartItem-info {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }

 .cartItem-info p {
   width: 35%;
   text-align: center;
 }

 .cartItem-quantity {
   display: inline-flex;
 }

 .quantity-plus, .quantity-minus {
   margin: 5px;
   width: 25px;
   height: auto;
 }
</style>