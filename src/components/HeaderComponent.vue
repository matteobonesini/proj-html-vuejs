<script>
export default {
    data() {
        return {
            navbarLink: [
                'Home',
                'Shop',
                'About',
                'Gallery',
                'Locations',
                'Journal',
                'Contacts',
                'My Account'
            ]
        }
    }
}
</script>

<template>
    <header class="px-3">
        <div class="header-top d-flex justify-content-between w-100 py-2">
            <div class="logo">
                <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
            </div>

            <div class="navbar">
                <ul>
                    <li v-for="(link, i) in navbarLink" :key="i" class="d-inline-block mx-3" :class="{
                        active: i == 0
                    }">
                        <a class="text-decoration-none text-uppercase" href="#">{{ link }}</a>
                    </li>
                    <li class="d-inline-block mx-3">
                        <a class="text-decoration-none text-uppercase" href="#">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="header-bottom">
            <h6 class="subtitle text-uppercase">Fresh & tasty bakery every day</h6>
            <h1 class="title">The Perfect Fresh Bread</h1>
            <p>
                Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat. Nullam
                quis sagittis nibh ac nulla id orci tempor.
            </p>
            <button class="primary">Explore our products</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/header.scss' as *;
</style>