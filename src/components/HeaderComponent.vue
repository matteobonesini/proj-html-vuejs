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
            ], // database of header-top link
            activeLink: 0 // store which link is active
        }
    }
}
</script>

<template>
    <header id="header">
        <div class="header-top d-flex justify-content-between w-100">
            <div class="logo">
                <a href="/">
                    <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
                </a>
            </div>

            <div class="navbar">
                <ul>
                    <li v-for="(link, i) in navbarLink" :key="i" class="d-inline-block mx-3" :class="{
                        active: i == activeLink
                    }" @click="activeLink = i">
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
            <div class="container d-flex flex-column justify-content-center align-items-start">
                <div class="width-500">
                    <h6 class="subtitle text-uppercase">Fresh & tasty bakery every day</h6>
                    <h1 class="title">The Perfect Fresh Bread</h1>
                    <p>
                        Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat.
                        Nullam
                        quis sagittis nibh ac nulla id orci tempor.
                    </p>
                    <button class="primary">Explore our products</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/header.scss' as *;
</style>