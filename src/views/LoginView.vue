<script setup>
import { Descope, useSession } from "@descope/vue-sdk";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { isLoading, isAuthenticated } = useSession();

// Redirect if isAuthenticated is true
watch(isAuthenticated, (newValue) => {
    console.log("New auth status", newValue);
    if (newValue === true) {
        router.replace({ name: "jobs" });
    }
});
</script>

<template>
    <div class="h-screen mt-4">
        <p v-if="isLoading">Loading...</p>
        <Descope v-if="!isAuthenticated" :flowId="'sign-up-or-in'" />
    </div>
</template>