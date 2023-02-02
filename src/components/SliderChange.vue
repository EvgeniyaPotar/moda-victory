<template>

  <div class="block text-center">
    <el-carousel trigger="click" height="830px" :autoplay="false">
      <el-carousel-item v-for="slide in sliders" :key='slide' >
        <div class="banner">
          <div class="title">
          <h2 class="banner-subtitle"
              v-bind:style="{color: slide.activeColor, fontSize: slide.size}"
          >{{ slide.label2}}</h2>
          <h1 class="banner-title"
              v-bind:style="{color: slide.activeColor}"
          >{{ slide.label1}}</h1>
          <h3 class="banner-title-share"
              v-bind:style="{color: slide.activeColor}"
          >{{ slide.label3}}</h3>
            <div class="banner-btn">
              <a class="btn-shop-now" href="#">
                <p>SHOP NOW</p>
              </a>
            </div>
          </div>
          <img :src="slide.image">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  data () {
    return {

        sliders: [
          {image: '/assets/images/banner1.jpg',
          label1: 'New Trend 2023',
          label2: 'New Collection',
          label3: 'BIG SALE OF THIS WEEK UP TO 30%',
            activeColor: '#000000FF',
            size: '1.8em'
          },
          {image: '/assets/images/banner2.jpg',
            label1: 'Summer Fashion',
            label2: 'SALE',
            label3: 'UP TO 30% OFF',
            activeColor: '#ffffff',
            size: '2.8em'
          }
        ],

      }
    }
  }
</script>

<style>

.el-carousel__button {
  width: 1.3vh;
  height: 1.3vh;
  border-radius: 90%;
  background: #f87272;
}



</style>


<style scoped>

.banner {
  width: 100%;
  display: flex;
  align-items: center;

  animation: banner 4s;
}
.banner img {
  object-fit: cover;
  width: 100%;
  height: 830px;
}

.title {
  display: flex;
  flex-flow: column;
  width: 50%;
  position: absolute;
  margin-left: 12%;
}

@keyframes banner {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.banner-subtitle, .banner-title,.banner-title-share {
  margin: 0;
}

.banner-subtitle {
  font-size: 1.8em;
  font-weight: 500;
}

.banner-title{
  font-size: 4em;
  font-weight: 600;
}

.banner-title-share {
  font-size: 1.2em;
  font-weight: 200;
}


.banner-btn {
  display: flex;
  position: relative;
  margin-top: 30px;
}

.btn-shop-now {
  border:1px solid #f87272;
  background: #f87272;
}


.banner-btn a {
  text-decoration: none;
}

.btn-shop-now p {
  margin: 8px 20px 3px;
  color:#ffffff;
}


</style>
