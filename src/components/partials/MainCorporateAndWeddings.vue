<script>
import { store } from '../../store';

export default {
    data() {
        return {
            store,
            weddingHover: [false, false], // variables to manage hover effect
        }
    }
}
</script>

<template>
    <section class="corporate-and-weddings">
        <div class="container text-center">
            <h6 class="subtitle">Corporate & weddings</h6>
            <h3 class="title">Baking Special Moments</h3>
            <div class="images">
                <div class="image" @mouseenter="weddingHover[0] = true" @mouseleave="weddingHover[0] = false">
                    <img :src="weddingHover[0] ? store.getImagePath('corporate-hover-bg.jpg') : store.getImagePath('corporate-bg.jpg')"
                        alt="corporate">
                    <div class="hover" v-show="weddingHover[0]">
                        <h6 class="subtitle text-light text-capitalize">International Bakery</h6>
                        <h3 class="title text-light">Corporates Events</h3>
                        <button class="secondary">Explor more</button>
                    </div>
                </div>
                <div class="image" @mouseenter="weddingHover[1] = true" @mouseleave="weddingHover[1] = false">
                    <img :src="weddingHover[1] ? store.getImagePath('wedding-hover-bg.jpg') : store.getImagePath('wedding-bg.jpg')"
                        alt="wedding">
                    <div class="hover" v-show="weddingHover[1]">
                        <h6 class="subtitle text-light text-capitalize">Private Dining Hall</h6>
                        <h3 class="title text-light">Weddings & Parties</h3>
                        <button class="secondary">Explor more</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/main.scss' as *
</style>