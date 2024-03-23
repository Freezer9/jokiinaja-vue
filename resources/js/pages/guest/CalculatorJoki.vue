<template>
    <Navbar />

    <div class="mx-36 grid grid-cols-2 gap-16 pt-48 mb-20">
        <Card :img_path="img_path" :text="text" :description="description" />

        <div>
            <div
                class="bg-tridary rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40 p-10"
            >
                <h1 class="text-center text-2xl font-semibold">
                    Prakiraan Harga
                </h1>
                <form class="flex flex-col gap-6 text-slate-50 pt-5">
                    <label>
                        Game:
                        <select
                            name="game_name"
                            id="game_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="Mobile Legends">
                                Mobile Legends
                            </option>
                            <option value="Apex Legends">Apex Legends</option>
                            <option value="PUBG Mobile">PUBG Mobile</option>
                        </select>
                    </label>
                    <label>
                        Total Pertandingan Anda :
                        <input
                            type="number"
                            placeholder="0"
                            onchange="setMatch(event.target.value)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <label>
                        Total Winrate Anda :
                        <input
                            type="number"
                            placeholder="0"
                            onchange="setWr(event.target.value)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <label>
                        Winrate yang Anda inginkan :
                        <input
                            type="number"
                            placeholder="0"
                            onchange="setPromis(event.target.value)"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <div class="flex gap-8">
                        <button onclick="handleSubmit()" class="btn">
                            Hasil
                        </button>
                        <button class="btn">Order Joki</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <Footer />
</template>
<script>
import Navbar from "../../layouts/Navbar.vue";
import Footer from "../../layouts/Footer.vue";
import Card from "../../layouts/Card.vue";

export default {
    components: {
        Navbar,
        Footer,
        Card,
    },
    data() {
        return {
            text: "Calculator Joki",
            description:
                "Hitung biaya joki dengan mudah dan cepat. Cukup masukkan data yang diperlukan, dan kami akan memberikan hasilnya.",
            img_path: "../../img/pcgamer.png",
        };
    },
    methods: {
        setMatch(value) {
            this.match = value;
        },
        setWr(value) {
            this.wr = value;
        },
        setPromis(value) {
            this.promis = value;
        },
        handleSubmit() {
            this.result = this.match * this.wr * this.promis;
        },
    },
};
</script>
<style></style>
