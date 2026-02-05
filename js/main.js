Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})
Vue.component('product', {
        props: {
            premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" :alt="altText"/>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ sale }}</p>
            <p v-if="inStock > 10">In stock</p>
            <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
            <p v-else :class="{ outOfStock: !inStock }">Out of stock</p>
            
            <ul>
                <product-details :details="details"></product-details>
            </ul>

            <div class="color-box"
                 v-for="(variant, index) in variants"
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)">
            </div>

            <p>Sizes:</p>
            <ul>
                <li v-for="size in sizes" :key="size">{{ size }}</li>
            </ul>

            <button v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">
                Add to cart
            </button>
            <button v-on:click="removeFromCart">Remove from cart</button>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            brand: "Vue Mastery",
            product: "Socks",
            selectedVariant: 0,
            altText: "A pair of socks",
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
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return 2.99;
        },
        sale() {
            return this.onSale ? this.brand + ' ' + this.product + ' is on sale!' : this.brand + ' ' + this.product + ' is not on sale.'
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
    }
})