<template>
    <Navbar />

    <div class="mx-36 grid grid-cols-2 gap-16 pt-48 mb-20">
        <Card :img_path="img_path" :text="text" :description="description" />

        <div>
            <div
                class="bg-tridary rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40 p-10"
            >
                <h1 class="text-center text-2xl font-semibold">Contact Us</h1>
                <form
                    action=""
                    method="POST"
                    class="gap-5 pt-5"
                    enctype="multipart/form-data"
                >
                    <div class="grid grid-cols-2 gap-5">
                        <div class="flex flex-col gap-4">
                            <label>
                                Tipe :
                                <input
                                    type="text"
                                    name="complaint_type"
                                    required
                                    placeholder="Type here"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </label>
                            <label>
                                No. Whatsapp :
                                <input
                                    type="number"
                                    name="phone_number"
                                    required
                                    placeholder="08xxxxxx"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </label>
                            <label>
                                Email :
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Type Email"
                                />
                            </label>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label>
                                No. Invoice :
                                <input
                                    type="text"
                                    name="invoice_name"
                                    required
                                    placeholder="INV-XXX"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </label>
                            <label>
                                Keterangan :
                                <input
                                    name="complaint_details"
                                    required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Berikan Penjelasan"
                                />
                            </label>
                            <label>
                                Kirim Bukti :
                                <input
                                    type="file"
                                    name="userfile"
                                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:border-none file:h-full file:p-2.5"
                                />
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <input
                            type="submit"
                            value="Send"
                            name="upload"
                            class="btn my-3 bg-white hover:bg-green-700 hover:cursor-pointer"
                        />
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
            text: "Check Your Invoice",
            description: "Check your invoice here",
            img_path: "",
        };
    },
};
</script>
<style></style>
