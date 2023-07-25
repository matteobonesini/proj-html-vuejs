<script>
export default {
    data() {
        return {
            weddingHover: [false, false],
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL('../../assets/img/' + imgPath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <section class="corporate-and-weddings">
        <div class="container text-center">
            <h6 class="subtitle">Corporate & weddings</h6>
            <h3 class="title">Baking Special Moments</h3>
            <div class="image">
                <img :src="weddingHover[0] ? getImagePath('corporate-hover-bg.jpg') : getImagePath('corporate-bg.jpg')"
                    alt="corporate" @mouseenter="weddingHover[0] = true" @mouseleave="weddingHover[0] = false">
                <img :src="weddingHover[1] ? getImagePath('wedding-hover-bg.jpg') : getImagePath('wedding-bg.jpg')"
                    alt="wedding" @mouseenter="weddingHover[1] = true" @mouseleave="weddingHover[1] = false">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/main.scss' as *
</style>