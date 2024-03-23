import { createRouter, createWebHistory } from "vue-router";
import CheckInvoice from "../pages/guest/CheckInvoice.vue";
import Home from "../pages/guest/Home.vue";
import NotFound from "../components/NotFound.vue";
import Invoice from "../pages/seller/Invoice.vue";
import ContactUs from "../pages/guest/ContactUs.vue";
import CalculatorJoki from "../pages/guest/CalculatorJoki.vue";
import Login from "../pages/Login.vue";
import ChooseGame from "../pages/guest/game/ChooseGame.vue";
import MobileGame from "../pages/guest/game/MobileGame.vue";
import PCGame from "../pages/guest/game/PCGame.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/check-invoice",
        name: "Check Invoice",
        component: CheckInvoice,
    },
    {
        path: "/calculator-joki",
        name: "Calculator Joki",
        component: CalculatorJoki,
    },
    {
        path: "/contact-us",
        name: "Contact Us",
        component: ContactUs,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/choose-game",
        name: "Choose Game",
        component: ChooseGame,
    },
    {
        path: "/pc-game",
        name: "PC Game",
        component: PCGame,
    },
    {
        path: "/mobile-game",
        name: "Mobile Game",
        component: MobileGame,
    },
    {
        path: "/invoice",
        name: "Invoice",
        component: Invoice,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
