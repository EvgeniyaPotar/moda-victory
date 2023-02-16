<template>
  <div class="main-wrapper">
    <header class="fixed-header">

      <div class="preview-header"  id="preview-header">
        <div class="preview-logo">
          <a class="logo" src="#"></a>
        </div>
      </div>

      <div class="header">
        <div class="header-inner">
          <div class="header-inner-logo">Moda<span>Victory</span></div>
          <nav class="nav">
            <ul class="menu">
              <li class="nav-item">
                <a href="index.html">Home</a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Homepage Style1</a>
                    <a href="#">Homepage Style2</a>
                    <a href="#">Homepage Style3</a>
                    <a href="#">Homepage Style4</a>
                    <a href="#">Homepage Style5</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#">Shop</a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Shop Layouts</a>
                    <a href="#">Shop Detais</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" >
                <a href="#">Page</a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Coming soon</a>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" >
                <a href="#">Blog</a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Blog list full</a>
                    <a href="#">Blog list Slide 1 </a>
                    <a href="#">Blog list Slide 2</a>
                    <a href="#">Blog Gird Full</a>
                    <a href="#">Blog Gird Slide</a>
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#">Contact</a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Contact Style 1</a>
                    <a href="#">Contact Style 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="box-search" href="#"  @click="toggleElement" title="Search...">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <ul class="submenu">
                  <li class="menu-item">
                    <a href="#">Contact Style 1</a>
                    <a href="#">Contact Style 2</a>
                  </li>
                </ul>
                <form action="#" method="get" class="search-all-pages" v-show="isElVisible">
                  <input type="text" size="30" placeholder="Search...">
                </form>
              </li>
              <li class="box-login">
                <a class="nav-item" href="#" @click="showAuthorization" title="Log in" >
                  <i class="fa-solid fa-user"></i>
                </a>

                <div class="modalLogIn" >
                  <UserLogin :show="showModal"
                             v-show="showModal"
                             @close="showModal=false"
                  ></UserLogin>
                </div>
              </li>
              <li class="box-cart-shopping">
                <a class="nav-item" href="#" @click="showShoppingCart" >
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>{{ CART.length}}</span>
                </a>
                <div class="modalShoppingCart"  >
                  <ShoppingCart :cartData="CART"
                                v-show="showModalCart"
                                @close="toggleModalShoppingCart"
                  ></ShoppingCart>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>

    <SliderChange></SliderChange>

    <section class="new-product">
      <div class="container">

        <div class="section-header">
          <h1 class="section-header-title">New Product</h1>
        </div>

        <CardsProduct :products="PRODUCTS_NEW"
                      @addToCart="addToCart"
        ></CardsProduct>

      </div>
    </section>

    <div class="section-banner">
      <div class="banner-container">
        <div class="section-title">
          <h2 class="banner-subtitle">New Trend 2023</h2>
          <h1 class="banner-title">Women's Collection</h1>
          <h3 class="banner-title-share">Big sale of this week</h3>
          <div class="banner-btn">
            <a class="btn-shop-now" href="#">
              <p>SHOP NOW</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <section class="best-sale">
      <div class="container">

        <div class="section-header">
          <h1 class="section-header-title">Best Sale</h1>
        </div>

        <div class="best-sale-categories">
          <ul class="nav-categories">
            <li class="nameCategory"
                v-for="(category,index) in categories"
                @click.prevent="setActive(index)"
                :key="category.id"
                :class="{ active:(isActive === category.id) }"
            >
              <a href="#">{{category.title}}</a>
            </li>
          </ul>

          <CardsProduct :products="filteredProducts"
                        @addToCart="addToCart"
          ></CardsProduct>

        </div>
      </div>
    </section>

    <div class="section-delivery">
      <div class="delivery-container">
        <div class="delivery-item">
          <div class="icon-wrap">
            <i class="fa-solid fa-truck"></i>
          </div>
          <h4>
            <a href="#"> Free Shipping</a>
          </h4>
          <p>Free Shipping on order over $89</p>
        </div>
        <div class="delivery-item">
          <div class="icon-wrap">
            <i class="fa-regular fa-money-bill-1"></i>
          </div>
          <h4>
            <a href="#">Cash On Delivery</a>
          </h4>
          <p>The Internet Trend To Repeat</p>
        </div>
        <div class="delivery-item">
          <div class="icon-wrap">
            <i class="fa-solid fa-gift"></i>
          </div>
          <h4>
            <a href="#">Gift For All</a>
          </h4>
          <p>Receive Gift When Subscribe</p>
        </div>
        <div class="delivery-item">
          <div class="icon-wrap">
            <i class="fa-regular fa-clock"></i>
          </div>
          <h4>
            <a href="#">Opening All Week</a>
          </h4>
          <p>6.00 am - 17.00pm</p>
        </div>
      </div>
    </div>

    <section class="new-latest">

      <div class="container">

        <div class="section-header">
          <h1 class="section-header-title">New Latest</h1>
        </div>

        <div class="card">
          <div class="card__item">
            <div class="card__iner">
              <div class="card__img">
                <img src="/assets/images/blog-img.jpg" alt="">
              </div>
              <div class="card__text">
                <p>Trend of 2023</p>
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>

          <div class="card__item">
            <div class="card__iner">
              <div class="card__img">
                <img src="/assets/images/blog-img-01.jpg" alt="">
              </div>
              <div class="card__text">
                <p>Trend of 2023</p>
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>

          <div class="card__item">
            <div class="card__iner">
              <div class="card__img">
                <img src="/assets/images/blog-img-02.jpg" alt="">
                <div class="card__text">
                  <p>Trend of 2023</p>
                  <a href="#">READ MORE</a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    <div class="section-types-communication">
      <div class="communication-container">

        <div class="subscribe-text">
          <h3>Sign up for Send Newsletter</h3>
        </div>

        <div class="subscribe-email">
          <form action="#" method="post">
            <input type="email" placeholder="Your email" class="form-email">
            <button class="subscribe-btn" type="submit"><span>Subscribe</span></button>
          </form>
        </div>

        <div class="social-networks">
          <ul>
            <li>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-behance"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="footer-information">
          <div class="footer-list">
            <ul>
              <li  v-for="(list,index) in footerList.list1"
                   :key="index">
                <a href="#">{{ list }}</a>
              </li>

            </ul>
          </div>
          <div class="footer-list">
            <ul>
              <li v-for="(list,index) in footerList.list2"
                  :key="index">
                <a href="#">{{ list }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-list">
            <ul>
              <li  v-for="(list,index) in footerList.list3"
                   :key="index"
                    >
                <a href="#">{{ list }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-list">
            <div class="footer-logo">
              <a href="#">Moda<span>Victory</span></a>
            </div>
            <div class="footer-contacts">
              <ul>
                <li class="footer-address">112 Kingdom, NA 12, New York</li>
                <li class="footer-tel">+12 345 678 910</li>
                <li class="footer-email">infor.deercreative@gmail.com</li>
              </ul>
            </div>
          </div>


        </div>
        <hr>
        <div class="copyright"><p>Copyright @2023 ModaVictory</p></div>
      </div>

    </footer>

  </div>
</template>

<script>


import SliderChange from "../components/SliderChange";
import CardsProduct from "../components/CardsProduct";
import UserLogin from "../components/UserLogin";
import ShoppingCart from "../components/ShoppingCart";
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    SliderChange,
    CardsProduct,
    UserLogin,
    ShoppingCart
  },

  name: 'MainWrapper',
  data () {
    return{
      isElVisible: false,
      showModal: false,
      showModalCart: false,
      isActive: 1,
      categories: [
        {
          id:1,
          title:"All Products"
        },
        {
          id:2,
          title:"For Kid's"
        },
        {
          id:3,
          title:"For Man's"
        },
        {
          id:4,
          title:"For Woman's"
        },
        {
          id:5,
          title:"Accessories"
        }],
      footerList: {
        list1: ['About Us', 'Online Store', 'Blog', 'Contact Us'],
        list2: ['Login/ Register', 'Your Cart', 'Wishlist items', 'Your checkout'],
        list3: ['FAQs', 'Term of service', 'Privacy Policy', 'Returns'],
      }
    }
  },
  computed: {
    filteredProducts() {
      let products =this.PRODUCTS_SALE;
      const active_category_id = this.isActive;
      products = products.filter((p)=>p.category_id.indexOf(active_category_id)>=0);
      return products;
    },
    ...mapGetters([
      'PRODUCTS_NEW',
      'PRODUCTS_SALE',
      'CART'
    ]),

  },
  methods: {
    toggleElement() {
      this.isElVisible = !this.isElVisible
    },
    showAuthorization() {
      this.showModal = !this.showModal
    },
    showShoppingCart() {
      this.showModalCart=!this.showModalCart
    },
    toggleModalShoppingCart() {
      this.showModalCart = !this.showModalCart
    },

    setActive(index) {
      this.isActive = this.categories[index].id;
    },
    ...mapActions([
      'GET_PRODUCTS_NEW_FROM_API',
      'GET_PRODUCTS_SALE_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    }
  },
  created() {
      window.document.addEventListener('click', e => { // при клике в любом месте окна браузера
        const target = e.target // находим элемент, на котором был клик
        if (!target.closest('.modalShoppingCart') &&  !target.closest('.box-cart-shopping')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
          this.showModalCart = false;// то закрываем окно навигации, удаляя активный класс
        }
      })

    window.document.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.user-login-content') &&  !target.closest('.box-login'))  { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        this.showModal = false;// то закрываем окно навигации, удаляя активный класс
      }
    })

    window.document.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.box-search'))  { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        this.isElVisible = false;// то закрываем окно навигации, удаляя активный класс
      }
    })
  },
  mounted() {
    this.GET_PRODUCTS_NEW_FROM_API();
    this.GET_PRODUCTS_SALE_FROM_API();


  }
}
</script>




