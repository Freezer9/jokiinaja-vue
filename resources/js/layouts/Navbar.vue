<template>
    <nav>
        <div class="container nav__container">
            <a href="#"><h4 class="font-semibold">JokiinAja</h4></a>
            <ul class="nav__menu">
                <li v-for="(item, index) in navbarUrl" :key="index">
                    <router-link :to="item.url">{{ item.name }}</router-link>
                </li>
                <li>
                    <router-link to="/login" class="btn__signin"
                        >Login</router-link
                    >
                </li>
            </ul>
            <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
            <button id="close-menu-btn">
                <i class="uil uil-multiply"></i>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    // Make navbar url
    data() {
        return {
            navbarUrl: [
                { name: "Home", url: "/home" },
                { name: "Check Invoice", url: "/check-invoice" },
                { name: "Calculator Joki", url: "/calculator-joki" },
                { name: "Contact Us", url: "/contact-us" },
            ],
        };
    },
};
</script>
