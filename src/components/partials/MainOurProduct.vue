<script>
import { store } from '../../store';

export default {
    data() {
        return {
            store,
            ourProductsCarousel: true, // variable to manage the functionality of the carousel
            ourProductsCarouselArr: [
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
                    src: 'cookies-with-ice-cream-600x765.jpg',
                    title: 'Cookies with ice cream',
                    price: '$18.00 - $34.00',
                },
                {
                    src: 'home-bread-600x765.jpg',
                    title: 'Home bread',
                    price: '$22.00 - $46.00',
                }
            ], // database of carousel
            carouselSlide: {
                transform: 'translateX(0)',
                transition: 'all 1s'
            }, // style of carousel, to create a transition
        }
    },
    methods: {
        // function to slide the carousel
        changeCarouselActive() {
            this.ourProductsCarousel = !this.ourProductsCarousel;
            if (this.ourProductsCarousel) {
                this.carouselSlide.transform = 'translateX(0)'
            } else {
                this.carouselSlide.transform = 'translateX(calc(-200% - 40px))'
            }
        }
    }
}
</script>

<template>
    <section class="our-products">
        <div class="container d-flex">
            <div class="left">
                <h6 class="subtitle">Our Products</h6>
                <h3 class="title">All our delectable pastries are backed fresh in our Kitchen very morning, and are made
                    with all-natural, all organic ingredients.</h3>
                <button class="secondary">Start Shopping</button>
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
                        <div class="image" v-for="(image, i) in ourProductsCarouselArr" :key="i" :style="carouselSlide"
                            :class="image.active ? 'd-inline-block' : 'd-inline-block'">
                            <div class="overlay">
                                <h5 class="text-light text-center">
                                    {{ image.title }}
                                    <div>Cookies, Pastries</div>
                                    {{ image.price }}
                                </h5>
                            </div>
                            <img class="w-100" :src="store.getImagePath(image.src)" :alt="image.title">
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