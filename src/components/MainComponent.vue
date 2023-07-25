<script>
import MainOurProduct from './partials/MainOurProduct.vue';
import MainCorporateAndWeddings from './partials/MainCorporateAndWeddings.vue';
import MainProductsPreview from './partials/MainProductsPreview.vue';
import MainBakeryProcess from './partials/MainBakeryProcess.vue';
import MainLocations from './partials/MainLocations.vue';
import MainSocial from './partials/MainSocial.vue';
import MainCallToAction from './partials/MainCallToAction.vue';

export default {
    components: {
        MainOurProduct,
        MainCorporateAndWeddings,
        MainProductsPreview,
        MainBakeryProcess,
        MainLocations,
        MainSocial,
        MainCallToAction
    },
    methods: {
        getImagePath(imgPath) {
            return new URL('../assets/img/' + imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <main>

        <MainOurProduct />

        <MainCorporateAndWeddings />

        <MainProductsPreview />

        <MainBakeryProcess />

        <MainLocations />

        <MainSocial />

        <MainCallToAction />

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/main.scss';
</style>