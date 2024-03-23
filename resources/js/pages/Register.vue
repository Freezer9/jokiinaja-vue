<template>
    <div class="mx-36 grid grid-cols-2 gap-16 pt-48 mb-20">
        @include('layouts._card', ['text' => 'Register for Reward',
        'description' => 'Daftar sekarang untuk mendapatkan promo menarik',
        'img_path' => '/assets/img/pcgamer.png'])

        <div>
            <div
                class="bg-tridary rounded-3xl bg-tridary hover:shadow-slate-900 hover:z-40 p-10"
            >
                <h1 class="text-center text-xl font-semibold">
                    Seller Register
                </h1>
                <form
                    action="{{ route('register') }}"
                    method="post"
                    class="flex flex-col gap-5 pt-5"
                >
                    <label>
                        Fullname * :
                        <input
                            name="full_name"
                            type="text"
                            required
                            placeholder="Type Your Fullname"
                            value="{{ old('full_name') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
                        />
                        <div class="text-red-500 mt-1">
                            {{ $message }}
                        </div>
                    </label>
                    <label>
                        Email * :
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Type Your Email"
                            value="{{ old('email') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <div class="text-red-500 mt-1">
                            {{ $message }}
                        </div>
                    </label>
                    <label>
                        Phone Number * :
                        <input
                            name="phone_number"
                            type="text"
                            required
                            placeholder="Type Your Phone Number"
                            value="{{ old('phone_number') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        @error('phone_number')
                        <div class="text-red-500 mt-1">
                            {{ $message }}
                        </div>
                        @enderror
                    </label>
                    <label>
                        Username * :
                        <input
                            name="username"
                            type="text"
                            required
                            placeholder="Type Your Username"
                            value="{{ old('username') }}"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        @error('username')
                        <div class="text-red-500 mt-1">
                            {{ $message }}
                        </div>
                        @enderror
                    </label>
                    <label>
                        Password * :
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Type your Password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <div class="text-red-500 mt-1">
                            {{ $message }}
                        </div>
                    </label>
                    <label>
                        Konfirmasi Password * :
                        <input
                            name="password_confirmation"
                            type="password"
                            required
                            placeholder="Confirm Password"
                            autocomplete="new-password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </label>
                    <div class="items-center justify-center grid">
                        <button
                            value="Login"
                            type="submit"
                            required
                            class="btn bg-white"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
