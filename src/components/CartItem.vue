<template>
 <div class="cartItem">
   <img :src='cartItemData.photo' alt="" class="cartItem-image">
   <div class="cartItem-info">
     <p>{{ cartItemData.nameProduct }}</p>
     <p>{{ cartItemData.price }}</p>
   </div>

   <div class="cartItem-quantity">
     <p>Qty</p>
     {{ cartItemData.quantity }}
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
</style>