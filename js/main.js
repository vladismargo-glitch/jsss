let app = new Vue({
    el: '#app',
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },

        sale() {
            if (this.onSale) {return this.brand + ' ' + this.product + ' is on sale!';

            }
            return this.brand + ' ' + this.product + ' is not on sale.';
        },

        image() {
            return this.variants[this.selectedVariant].variantImage;
        },

        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1

        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },
    },
    data: {
        brand: "Vue Mastery",
        product: "Socks",
        selectedVariant: 0,
        altText: "A pair of socks",
        inStock: false,
        description: "A pair of warm, fuzzy socks.",
        productclasq: "More products like this.",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        inventory: 0,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],


        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    }

})

