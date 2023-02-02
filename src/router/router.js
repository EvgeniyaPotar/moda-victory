import { createApp } from 'vue';
import Router from 'vue-router';

import MainWrapper from "@/components/MainWrapper";
import ShoppingCart from "@/components/ShoppingCart";

app.use(Router);

let router = new Router({
    routes:[
        {
        path: '/',
        name: 'catalog',
        component: MainWrapper
        },
        {
         path: '/cart',
         name: 'cart',
         component: ShoppingCart
        }
    ]
})

export default router;