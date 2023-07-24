<script>
export default {
    data() {
        return {
            ourProductsCarousel: true
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

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/main.scss';
</style>