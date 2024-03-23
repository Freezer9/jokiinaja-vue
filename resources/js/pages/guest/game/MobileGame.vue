<template>
    <Navbar />

    <div class="bg-primary pt-20">
        <div class="relative">
            <div class="mx-14 gap-4 border p-5 rounded-3xl h-[32rem]"></div>
            <div
                class="flex gap-8 p-5 bg-secondary absolute z-30 top-6 w-screen justify-center"
            >
                <div class="text-white flex justify-between pt-10 flex-col">
                    <h1 class="text-2xl font-semibold">
                        Choose Your <br />
                        Mobile Game
                    </h1>
                    <div class="pb-10">
                        <p>Tidak menemukan game anda ?</p>
                        <router-link
                            class="btn mt-2 hover:bg-green-400 hover:cursor-pointer"
                            to="/contact-us"
                        >
                            Contact Us
                        </router-link>
                    </div>
                </div>

                <h6>
                    <div>Halo Anjay</div>
                </h6>
                <div class="grid grid-cols-4 gap-4 w-2/3">
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Mobile Legends
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Apex Legends Mobile
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            PUBG Mobile
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            COD Mobile
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Freefire
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Genshin Impact
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Clash Of Clans
                        </p>
                    </a>
                    <a
                        href=""
                        class="hover:z-40 hover:cursor-pointer hover:bg-blue-400 hover:transition-all rounded-xl border p-1 hover:scale-105 transition-all"
                    >
                        <img src="" alt="Game Image" class="rounded-t-xl" />
                        <p class="text-slate-50 text-center mt-1 font-medium">
                            Clash Royale
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>
<script>
import Navbar from "../../../layouts/Navbar.vue";
import Footer from "../../../layouts/Footer.vue";
export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
<style></style>
