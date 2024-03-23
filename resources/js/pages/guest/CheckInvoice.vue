<template>
    <Navbar />

    <div class="mx-36 grid grid-cols-2 gap-16 pt-48 mb-20">
        <Card :img_path="img_path" :text="text" :description="description" />

        <div>
            <div
                class="bg-tridary rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40 p-8"
            >
                <form
                    action=""
                    method="post"
                    class="flex flex-col gap-6 text-slate-50 pt-4"
                >
                    <div class="relative">
                        <input
                            class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm placeholder-slate-600"
                            id="invoice_name"
                            type="text"
                            name="invoice_name"
                            required
                            autofocus
                            placeholder="Your invoice"
                        />
                        <span
                            class="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            <button
                                type="submit"
                                class="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all text-white px-4 py-2 rounded-lg focus:outline-none"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    ></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Card from "../../layouts/Card.vue";
import Footer from "../../layouts/Footer.vue";
import Navbar from "../../layouts/Navbar.vue";

export default {
    data() {
        return {
            text: "Check Your Invoice",
            description:
                "Make sure you have paid it before 1 day after your order",
            img_path: "../../../img/invoicecheck.jpg",
        };
    },
    components: {
        Navbar,
        Footer,
        Card,
    },
};
</script>
<style></style>
