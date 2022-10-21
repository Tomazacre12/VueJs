const app = Vue.createApp({
    data(){
        return {
            urlTesting: 'gg.com',
           products: [
            {
                thumb: './assets/1.jpg',
                name: 'Sản phẩm A',
                price: 120.0,
                isCart: false,
            },
            {
                thumb: './assets/2.jpg',
                name: 'Sản phẩm B',
                price: 210.0,
                isCart: false,
            },
            {
                thumb: './assets/3.jpg',
                name: 'Sản phẩm C',
                price: 120.1,
                isCart: true,
            },
           ]
        }
    },
    methods: {
        onToggleCart(event, product){
            product.isCart = !product.isCart
        }
    },
    computed: {
        productsComputed(){
           return this.products.filter(product => product.price < 160)
        }
    }
})
app.mount('#contact')