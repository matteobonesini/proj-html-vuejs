<script>
export default {
    data() {
        return {
            footerLinks: [
                'Shop',
                'About',
                'Gallery',
                'Locations',
                'Journal',
                'Contact',
                'Orders'
            ], // database of footer-left link
            socialClass: [
                'fa-instagram',
                'fa-twitter',
                'fa-facebook-f',
                'fa-pinterest-p'
            ] // database of footer-right link
        }
    }
}
</script>

<template>
    <footer class="d-flex p-5">
        <div class="footer-left w-50 d-flex flex-column justify-content-between">
            <div class="top">
                <div class="logo">
                    <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
                </div>
                <nav>
                    <ul class="list-unstyled w-100 d-flex justify-content-between">
                        <li v-for="(link, i) in footerLinks" :key="i" class="d-inline-block">
                            <a href="#">{{ link }}</a>
                        </li>
                        <li class="d-inline-block">
                            <a href="#">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <div class="d-inline counter">0</div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="copyright subtitle">
                Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserve | Powered by Wordpress
            </div>
        </div>
        <div class="footer-right w-50 d-flex flex-column justify-content-between text-end">
            <div class="top">
                <h3 class="title fw-bold">Subscribe to our Newsletter</h3>
                <form method="GET" action="" @submit.prevent="">
                    <input name="email" type="email" placeholder="Enter email address*">
                    <button class="secondary" type="submit">Subscribe</button>
                </form>
            </div>
            <nav class="list-unstyled">
                <ul class="m-0">
                    <li class="d-inline-block me-4" v-for="singleClass in socialClass">
                        <a href="#">
                            <i class="fa-brands" :class="singleClass"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/footer.scss'
</style>