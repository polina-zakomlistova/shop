// window.addEventListener("load", init)

// function init() {

// }

// let goodsList = [{
//         "title": "1",
//         "description": "111",
//         "price": 10,
//         "id": 1,
//         "img": "foto1",
//         "quantity":3,
//         "size": "S",
// },
// {
//         "title": "2",
//         "description": "222",
//         "price": 20,
//         "id": 2,
//         "img": "foto2",
//         "quantity":3,
//         "size": "M",
// },
// {
//         "title": "3",
//         "description": "333",
//         "price": 30,
//         "id": 3,
//         "img": "foto3",
//         "quantity":3,
//         "size": "S",
// },
// {
//         "title": "4",
//         "description": "444",
//         "price": 40,
//         "id": 4,
//         "img": "foto4",
//         "quantity":3,
//         "size": "L",
// },
// {
//         "title": "5",
//         "description": "555",
//         "price": 50,
//         "id": 5,
//         "img": "foto5",
//         "quantity":3,
//         "size": "S",
// },
// {
//         "title": "1",
//         "description": "111",
//         "price": 10,
//         "id": 1,
//         "img": "foto1",
//         "quantity":3,
//         "size": "M",
// },
// {
//         "title": "1",
//         "description": "111",
//         "price": 10,
//         "id": 1,
//         "img": "foto1",
//         "quantity":3,
//         "size": "L",
// }];

// vue.component("product",{
//     data: function(){},
//     template: `<div class="products__wrapper">
//                                 <div class="products-img__wrapper">
//                                     <img class="products__img" v-bind:src=`img/${good.img}.png` v-bind:alt="good.img" width="360" height="420">
//                                 </div>
//                                 <div class="products__information">
//                                     <h3 class="products__title">{{good.title}}</h3>
//                                     <p class="products__description">{{good.description}}</p>
//                                     <p class="products__description">Size: {{good.size}}</p>
//                                     <p class="price">${{good.price}}</p>

//                                 </div>
//                             </div>`
// }

// )

// const filters = new Vue (
//     {
//         el: "#filters",
//         data:{
//             selectedSizes: ["S","L","M"],
//             prices:{"min": 0, "max":1000},
//         },
//     }
// )

// function includedInTheRange(minSize, maxSize,size){
//     if (size >= minSize && size <= maxSize) {
//         return true;
//     }
//     return false;
// }

// const cart = new Vue(
//     {
//         el: "#cart",
//         data: {
//             gooodsInCart: [],
//         },
//         computed:{
//             totalPrice(){
//                 let price = 0;
//                 this.gooodsInCart.forEach(good => price+good.price)} ,
//             quantityGoods(){return this.cart.gooodsInCart.length},
//         },

//         methods: {
//             addToCart: function(good){
//                 this.gooodsInCart.push(good)
//             },
//             deleteFromCart: function(good){
//                 this.gooodsInCart.splice(good.index, 1);
//                 products.goodsList.push(good);
//             }
//         }
//     }
// )

// const products = new Vue ({
//     el: "#goods",
//     data: {
//         goodsList: goodsList,
//         filterableFields: ["size","price"],
//     },
//     methods: {
//         addToCart: function(good){if (good.quantity > 0) {
//         good.quantity--;
//         cart.addToCart(good)} },
//         },
//     computed: {
//         filteredGoodList: function (){
//             return this.goodsList.filter(function(good) {
//                 let allFilterTrue = true;
//                 ///ТУТ МАССИВ НЕ ПОЛУЧАЕТСЯ
//                  ["size","price"].forEach(filter => {
//                     let isTrueFilter = false;

//                     if (filter=="price") {
//                         isTrueFilter = includedInTheRange(filters.prices.min,filters.prices.max, good[filter]);
//                     } else {
//                         isTrueFilter = filters.selectedSizes.includes(good[filter]);
//                     }

//                     if (!isTrueFilter) {
//                         allFilterTrue = false;
//                     }
//                 }
//                 );

//                 return allFilterTrue;
//             });
//         }
//     }
// })
