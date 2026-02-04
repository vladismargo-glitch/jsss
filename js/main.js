let app = new Vue({
    el: '#app',
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    data: {
        product: "Socks",
        image: "./assets/vmSocks-blue-onWhite.jpg",
        altText: "A pair of socks",
        inStock: false,
        description: "A pair of warm, fuzzy socks.",
        productclasq: "More products like this.",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inventory: 0,
        onSale: false,
        updateProduct(variantImage) {
            this.image = variantImage
        },

        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],


        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    }
})


