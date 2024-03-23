<template>
    <Navbar />

    <div class="mx-36 grid grid-cols-2 gap-16 pt-48 mb-20">
        <Card :img_path="img_path" :text="text" :description="description" />

        <div>
            <div
                class="bg-tridary rounded-3xl bg-tridary p-10 transition-all hover:scale-105 hover:transition-all hover:shadow-slate-700 hover:shadow-xl"
            >
                <h1 class="text-center text-2xl font-semibold">Seller Login</h1>
                <form
                    action="{{ route('login') }}"
                    method="post"
                    class="flex flex-col gap-5 pt-5"
                >
                    <label>
                        Username * :
                        <input
                            name="username"
                            type="text"
                            required
                            placeholder="Type Username"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <label>
                        Password * :
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Type Password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <label class="flex gap-4">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <div class="gap-8 grid grid-cols-2">
                        <button type="submit" class="btn bg-white">
                            Login
                        </button>
                        <button type="submit">
                            <a
                                href="{{ route('register') }}"
                                class="btn bg-white w-full"
                                >Register</a
                            >
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <Footer />
</template>
<script>
import Navbar from "../layouts/Navbar.vue";
import Footer from "../layouts/Footer.vue";
import Card from "../layouts/Card.vue";

export default {
    components: {
        Navbar,
        Footer,
        Card,
    },
    data() {
        return {
            img_path: "../img/pcgamer.png",
            text: "Login for Reward",
            description: "Login sekarang untuk mendapatkan limited reward",
        };
    },
};
</script>
<style></style>
