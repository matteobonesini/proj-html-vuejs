<script>
export default {
    data() {
        return {
            ourProductsCarousel: true,
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
            ]
        }
    },
    mounted() {
        this.changeCarouselActive();
    },
    methods: {
        getImagePath(imgPath) {
            return new URL('../assets/img/' + imgPath, import.meta.url).href;
        },
        changeCarouselActive() {
            this.productPreviewCarousel = !this.productPreviewCarousel
            this.productPreviewCarouselArr.map((element, i) => {
                if (i < 4) {
                    element.active = this.productPreviewCarousel;
                } else {
                    element.active = !this.productPreviewCarousel
                }
            })
        }
    }
}
</script>

<template>
    <main>

        <section class="our-products">
            <div class="container d-flex">
                <div class="left">
                    <h6 class="subtitle text-uppercase">Our Products</h6>
                    <h4 class="title">All our delectable pastries are backed fresh in our Kitchen very morning, and are made
                        with all-natural, all organic ingredients.</h4>
                    <button class="secondary">Start Shopping</button>
                </div>
                <div class="right">
                    <div class="carousel">
                        <div class="control prev" @click="ourProductsCarousel = !ourProductsCarousel">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        <div class="control next" @click="ourProductsCarousel = !ourProductsCarousel">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="images">
                            <img v-show="ourProductsCarousel" src="../assets/img/choco-chip-cookies-600x765.jpg"
                                alt="cookies">
                            <img v-show="ourProductsCarousel" src="../assets/img/strawberry-jam-cookies-600x765.jpg"
                                alt="strawberry">
                            <img v-show="!ourProductsCarousel" src="../assets/img/cookies-with-ice-cream-600x765.jpg"
                                alt="ice-cream">
                            <img v-show="!ourProductsCarousel" src="../assets/img/home-bread-600x765.jpg" alt="bread">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="corporate-and-weddings">
            <div class="container text-center">
                <h6 class="subtitle text-uppercase">Corporate & weddings</h6>
                <h4 class="title">Baking Special Moments</h4>
                <div class="image">
                    <img src="../assets/img/corporate-bg.jpg" alt="corporate">
                    <img src="../assets/img/wedding-bg.jpg" alt="wedding">
                </div>
            </div>
        </section>

        <section class="products-preview">
            <div class="container d-flex">
                <div class="left text-center">
                    <h4 class="title">Find a freshly baked product perfect for you</h4>
                    <p>
                        Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac
                        nulla id orci tempor convallis sed.
                    </p>
                    <button class="secondary">Shop All Products</button>
                </div>
                <div class="right">
                    <div class="carousel">
                        <div class="control prev" @click="changeCarouselActive()">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        <div class="control next" @click="changeCarouselActive()">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="images">
                            <div class="image text-center" v-for="(element, i) in productPreviewCarouselArr" :key="i"
                                :class="element.active ? 'd-none' : 'd-inline-block'">
                                <img :src="getImagePath(element.src)" :alt="element.title">
                                <h5 class="title">{{ element.title }}</h5>
                                <div class="price">{{ element.price }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/main.scss';
</style>