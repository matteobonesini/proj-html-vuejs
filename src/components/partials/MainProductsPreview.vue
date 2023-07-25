<script>
export default {
    data() {
        return {
            productPreviewCarousel: true,
            productPreviewCarouselArr: [
                {
                    src: 'choco-chip-cookies-600x765.jpg',
                    title: 'Choco Chip Cookies',
                    price: '$19.00 - $39.00',
                },
                {
                    src: 'strawberry-jam-cookies-600x765.jpg',
                    title: 'Strawberry Jam Cookies',
                    price: '$24.00 - $62.00',
                },
                {
                    src: 'strawberry-donut-600x765.jpg',
                    title: 'Strawberry Donut',
                    price: '$24.00 - $42.00',
                },
                {
                    src: 'perfect-macarons-600x765.jpg',
                    title: 'Perfect Macarons',
                    price: '$18.00 - $52.00',
                },
                {
                    src: 'premium-bread-600x765.jpg',
                    title: 'Premium Bread',
                    price: '$32.00 - $68.00',
                },
                {
                    src: 'cherry-cake-600x765.jpg',
                    title: 'Cake with Cherry Topping',
                    price: '$99.00',
                },
                {
                    src: 'cookies-with-ice-cream-600x765.jpg',
                    title: 'Cookies with ice cream',
                    price: '$18.00 - $34.00',
                },
                {
                    src: 'blackberry-stuffed-bread-600x765.jpg',
                    title: 'Balckberry stuffed bread',
                    price: '$22.00 - $46.00',
                }
            ],
            carouselSlideProducts: {
                transform: 'translateX(0)',
                transition: 'all 1s'
            },
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL('../../assets/img/' + imgPath, import.meta.url).href;
        },
        changeCarouselActiveP() {
            this.productPreviewCarousel = !this.productPreviewCarousel
            if (this.productPreviewCarousel) {
                this.carouselSlideProducts.transform = 'translateX(0)'
            } else {
                this.carouselSlideProducts.transform = 'translateX(calc(-400% - 64px))'
            }
        }
    }
}
</script>

<template>
    <section class="products-preview">
        <div class="container d-flex">
            <div class="left text-center">
                <h3 class="title">Find a freshly baked product perfect for you</h3>
                <p>
                    Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac
                    nulla id orci tempor convallis sed.
                </p>
                <button class="secondary">Shop All Products</button>
            </div>
            <div class="right">
                <div class="carousel">
                    <div class="control prev" @click="changeCarouselActiveP()">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div class="control next" @click="changeCarouselActiveP()">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                    <div class="product-cards">
                        <div class="product-card text-center" v-for="(element, i) in productPreviewCarouselArr" :key="i"
                            :style="carouselSlideProducts">
                            <div class="image">
                                <div class="overlay">
                                    <h6 class="text-uppercase text-light">
                                        <a href="#">Select Options</a>
                                        /
                                        <a href="#">Quick View</a>
                                    </h6>
                                </div>
                                <img :src="getImagePath(element.src)" :alt="element.title">
                            </div>
                            <h5 class="title">{{ element.title }}</h5>
                            <div class="price">{{ element.price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/main.scss' as *
</style>