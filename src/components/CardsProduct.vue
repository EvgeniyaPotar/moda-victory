<template>
  <div class="cardsProduct">
    <ul>
      <li class="cardsProduct-inner" v-for="(product,index) in products"
          :key="product.id"
         >
        <div class="sticker-product"
             v-bind:style="{ background: product.stickerColor}">
          <span >{{ product.sticker }}</span>
        </div>

        <div class="description-product">
          <img :src="product.photo">
          <p>{{ product.nameProduct}}</p>
          <p>${{ product.price}}</p>
          <ul class="colorProduct">
            <li  v-for="(color,index) in product.colors"
                 :key="index">
              <a href="#"
                 v-bind:style="{ backgroundColor:color }"></a>
            </li>
          </ul>
        </div>

        <div class="add-to-card">
          <a href="#"
            @click.prevent="addToCart(index)"
          >ADD TO CART</a>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }

  },
  props: {
    products:{
      type: Object
    },


  },
  computed: {

  },
  methods: {
    addToCart(index) {
      this.$emit('addToCart',this.products[index])
    }
  },



}
</script>



<style scoped>
.cardsProduct {
  width: 100%;


}
.cardsProduct ul {
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 0 15.5% !important;
  width: 100%;
}


.cardsProduct li {
  display:inline-block;
  margin: 35px 0;
  padding: 15px;
  border-right: 1px solid #d5d2d2;
  width: 25%;
}


.cardsProduct-inner:hover  {
  transform: scale(1.02);
  border-right: none;
  box-shadow: inset 0 0  0 2px rgb(255,255,255),
              0.3em 0.3em 0.3em rgba(0,0,0,0.3);
}

.cardsProduct-inner {
  position: relative;
  transition: transform .2s linear;
  transform: translateZ(0);
}

.sticker-product {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 70px;
  height: 30px;
  margin-bottom: 15px;
  color: #ffffff;
}

.description-product {
  display: block;
  text-align: center;
}

.description-product img {
  width: 100%;
  height: auto;
}

.description-product p {
  font-size: 21px;
  margin-top: 0;
  line-height: 1.3;
}

.colorProduct{
  display: block;
  padding-left: 0;
}

.colorProduct li{
  border: none;
  margin: 0;
  width: 15px;
}

.colorProduct a {
  display: block;
  border-radius: 50%;
  cursor: pointer;
  width: 15px;
  height: 15px;

  transform: translateZ(0);
}

.colorProduct a:hover {
  font-weight: bold;
  transform: translate(-5%, 5%);
}


.add-to-card {
  height: 50px;
  width: 99.5%;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f63440;
  position: absolute;
  left: 2px;

  opacity: 0;
  box-shadow: inset 0 0  0 2px #f63440,
              0.3em 0.3em 0.3em rgba(0,0,0,0.3);

  transition: all .3s ease-in-out;
  transform: translateZ(0);
}


.add-to-card a {
  font-size: 16px;
  text-decoration: none;
  color: #ffffff;
}

.cardsProduct-inner:hover .add-to-card {
  opacity: 1;
}




</style>