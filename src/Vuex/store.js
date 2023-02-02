import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore ({
    state () {
        return{
            productsNew: [],
            productsSale: [],
            cart: []
        }
    },
    mutations:{
        SET_PRODUCTS_NEW_TO_STATE: (state, productsNew) => {
            state.productsNew=productsNew;
        },
        SET_PRODUCTS_SALE_TO_STATE: (state, productsSale) => {
            state.productsSale=productsSale;
        },
        SET_CART: (state, product) => {
            if (state.cart.length){
                let isProductExists = false;
                state.cart.map(function (item){
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product);
                    product.quantity = 1;

                }
            }else {
                state.cart.push(product);
                product.quantity = 1;
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        PLUS_QUANTITY_TO_CART: (state,index) => {
                state.cart[index].quantity++

        },
        MINUS_QUANTITY_FROM_CART:(state,index) => {
            if (state.cart[index].quantity >=1) {
                state.cart[index].quantity--
            }
            if (state.cart[index].quantity === 0) {
                state.cart.splice(index, 1)
            }
        }

    },

    actions: {
        GET_PRODUCTS_NEW_FROM_API({commit})  {
            return axios('http://localhost:3000/productsNew', {
                method: "GET"
            })
                .then((productsNew) => {
                    commit('SET_PRODUCTS_NEW_TO_STATE', productsNew.data);
                    return productsNew;
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        GET_PRODUCTS_SALE_FROM_API({commit})  {
            return axios('http://localhost:3000/productsSale', {
                method: "GET"
            })
                .then((productsSale) => {
                    commit('SET_PRODUCTS_SALE_TO_STATE', productsSale.data);
                    return productsSale;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_TO_CART({commit},product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit},index) {
            commit('REMOVE_FROM_CART',index)
        },
        ADD_QUANTITY_TO_CART({commit},index) {
            commit('PLUS_QUANTITY_TO_CART',index)
        },
        DELETE_QUANTITY_FROM_CART({commit},index) {
            commit('MINUS_QUANTITY_FROM_CART',index)
        }
    },
    getters: {
        PRODUCTS_NEW(state) {
            return state.productsNew;
        },
        PRODUCTS_SALE(state) {
            return state.productsSale;
        },
        CART(state) {
            return state.cart;
        }
    }
});
export default store;