<script setup lang="ts">
import { ref } from "vue";
import { VPButton } from "vitepress/theme";
const showMobile = ref(false);

const toggleView = () => {
    showMobile.value = !showMobile.value;
};

defineProps<{
    link: string;
    title: string;
    hasMobileView?: false;
}>();
</script>

<template>
    <div>
        <VPButton
            v-if="hasMobileView"
            @click="toggleView"
            size="medium"
            tag="button"
            :text="showMobile ? 'Show Desktop' : 'Show Mobile'"
            theme="brand"></VPButton>

        <Transition name="fade" mode="out-in">
            <div v-if="!showMobile" class="laptop-mockup">
                <iframe :src="link" :title="title"></iframe>
            </div>

            <div v-else class="mobile-mockup">
                <iframe :src="link" :title="title"></iframe>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.laptop-mockup {
    position: relative;
    width: 100%;
    aspect-ratio: 1.6;
    overflow: hidden;
    border-radius: 10px;
    border: black solid 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 12px;
}

.laptop-mockup iframe {
    position: absolute;
    top: -50%;
    left: center;
    min-width: 1440px;
    min-height: 900px;
    transform: scale(0.58);
    transform-origin: center;
    border: none;
}

.mobile-mockup {
    width: 375px;
    aspect-ratio: 9/18;
    border: 16px solid black;
    border-radius: 40px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    overflow: hidden;
}

.mobile-mockup iframe {
    width: 105%;
    height: 100%;
    border: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
