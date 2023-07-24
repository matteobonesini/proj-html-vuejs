<script>
    export default {
        data() {
            return {
                footerLink: [
                    'Shop',
                    'About',
                    'Gallery',
                    'Locations',
                    'Journal',
                    'Contact',
                    'Orders'
                ]
            }
        }
    }
</script>

<template>
    <footer class="d-flex p-5">
        <div class="footer-left w-50">
            <div class="logo">
                <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
            </div>
            <nav>
                <ul class="list-unstyled w-100">
                    <li v-for="(link, i) in footerLink" :key="i" class="d-inline-block me-4">
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
            <div class="copyright subtitle">
                Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserve | Powered by Wordpress
            </div>
        </div>
        <div class="footer-right w-50 text-end">
            <h4 class="title fw-bold">Subscribe to our Newsletter</h4>
            <form action="" @submit.prevent="">
                <input type="text" placeholder="Enter email address*">
                <button class="secondary" type="submit">Subscribe</button>
            </form>
            <nav class="list-unstyled">
                <ul>
                    <li class="d-inline-block me-4">
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li class="d-inline-block me-4">
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li class="d-inline-block me-4">
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="d-inline-block me-4">
                        <a href="#">
                            <i class="fa-brands fa-pinterest-p"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/footer.scss'
</style>