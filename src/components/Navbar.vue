<script setup>
import { useDescope, useUser } from "@descope/vue-sdk";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const { user } = useUser();
const { logout } = useDescope();

const login = () => {
    router.push({ name: "login" });
};

const handleLogout = () => {
    logout();
    router.replace({ name: "login" });
};
</script>

<template>
    <nav class="border-b p-4">
        <div class="container mx-auto flex items-center justify-between">
            <RouterLink to="/" class="text-2xl font-bold">
                JobBoard Pro
            </RouterLink>

            <div class="flex items-center space-x-4">
                <button
                    v-if="!user && !route?.fullPath?.includes('login')"
                    @click="login"
                    class="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
                >
                    Get Started
                </button>

                <button
                    v-if="user"
                    @click="handleLogout"
                    class="bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:bg-gray-500 transition duration-300 ease-in-out"
                >
                    Log Out
                </button>
            </div>
        </div>
    </nav>
</template>