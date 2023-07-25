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
                    <h6 class="subtitle">Our Products</h6>
                    <h3 class="title">All our delectable pastries are backed fresh in our Kitchen very morning, and are made
                        with all-natural, all organic ingredients.</h3>
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
                <h6 class="subtitle">Corporate & weddings</h6>
                <h3 class="title">Baking Special Moments</h3>
                <div class="image">
                    <img src="../assets/img/corporate-bg.jpg" alt="corporate">
                    <img src="../assets/img/wedding-bg.jpg" alt="wedding">
                </div>
            </div>
        </section>

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

        <section class="bakery-process">
            <div class="container">
                <div class="tell-us">
                    <div class="overlay"></div>
                    <h2 class="title text-light fs-1">Tell us what you have in mind</h2>
                    <div class="order  text-light">01</div>
                    <div class="description">
                        <h6 class="subtitle  text-light">Manual ingredients selection</h6>
                        <p class="text-light">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut
                            eu
                            laoreeet ex.
                            Aliquam
                            erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                            lorem
                            erat,
                            finibus in velit placerat, rutrum augue.</p>
                    </div>
                </div>

                <div class="process-center d-flex">
                    <div class="we-start">
                        <div class="overlay"></div>
                        <h2 class="title text-light fs-1">We Start Baking</h2>
                        <div class="order  text-light">02</div>
                        <div class="description">
                            <h6 class="subtitle  text-light">Sweet & delicius</h6>
                            <p class="text-light">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl
                                varius. Ut
                                eu
                                laoreeet ex.
                                Aliquam
                                erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                                lorem
                                erat,
                                finibus in velit placerat, rutrum augue.</p>
                        </div>
                    </div>

                    <div class="quote d-flex flex-column justify-content-center">
                        <h6 class="subtitle">Dont just take our word for it</h6>
                        <h2 class="title">"Finally found an alternative to the mass produced products. Somethings that
                            incorporates real organic ingredients, nutrient dense wellness while promoting sustainability
                            and activity."</h2>
                        <p>Rachel Cooper, Founder</p>
                    </div>
                </div>

                <div class="delivered">
                    <div class="overlay"></div>
                    <h2 class="title text-light fs-1">Delivered to your home</h2>
                    <div class="order  text-light">03</div>
                    <div class="description">
                        <h6 class="subtitle  text-light">Baked to order $ gift wrapped</h6>
                        <p class="text-light">Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut
                            eu
                            laoreeet ex.
                            Aliquam
                            erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec
                            lorem
                            erat,
                            finibus in velit placerat, rutrum augue.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="locations">
            <div class="container text-center">
                <h6 class="subtitle">
                    Locations
                </h6>
                <h3 class="title">Visit our Bakeries</h3>
                <div class="location-cards d-flex">
                    <div class="new-york w-50">
                        <img class="w-100" src="../assets/img/new-york-bk-800x530.jpg" alt="new-york">
                        <h3 class="title">New York</h3>
                        <div class="info d-flex justify-content-around">
                            <div class="call-us">
                                <h6 class="subtitle">Call us</h6>
                                <h6 class="subtitle">1.800.458.556</h6>
                            </div>
                            <div class="opening">
                                <h6 class="subtitle">Open all week</h6>
                                <h6 class="subtitle">9:00 AM - 6:00 PM</h6>
                            </div>
                            <div class="map">
                                <button class="primary">View Map</button>
                            </div>
                        </div>
                    </div>
                    <div class="london w-50">
                        <img class="w-100" src="../assets/img/london-bk-800x530.jpg" alt="london">
                        <h3 class="title">London</h3>
                        <div class="info d-flex justify-content-around">
                            <div class="call-us">
                                <h6 class="subtitle">Call us</h6>
                                <h6 class="subtitle">1.800.458.556</h6>
                            </div>
                            <div class="opening">
                                <h6 class="subtitle">Open all week</h6>
                                <h6 class="subtitle">9:00 AM - 6:00 PM</h6>
                            </div>
                            <div class="map">
                                <button class="primary">View Map</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="social">
            <div class="container">
                <div class="row g-4">
                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-1.jpg" alt="social-1">
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column justify-content-center align-items-center h-100">
                            <h6 class="subtitle">Made for sharing</h6>
                            <h3 class="title">Let's stay in touch</h3>
                            <button class="secondary">
                                <i class="fa-brands fa-instagram me-2"></i>
                                Follow Us
                            </button>
                        </div>
                    </div>
                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-2.jpg" alt="social-2">
                    </div>

                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-3.jpg" alt="social-3">
                    </div>
                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-4.jpg" alt="social-4">
                    </div>
                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-5.jpg" alt="social-5">
                    </div>
                    <div class="col-3">
                        <img class="w-100" src="../assets/img/social-6.jpg" alt="social-6">
                    </div>
                </div>
            </div>
        </section>

        <section class="call-to-action">
            <div class="call-container d-flex flex-column justify-content-center align-items-start">
                <h6 class="subtitle text-light">Try our season products</h6>
                <h2 class="title text-light w-50">Order for pick-up or delivery to your home</h2>
                <button class="primary">Shop Now</button>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/main.scss';
</style>