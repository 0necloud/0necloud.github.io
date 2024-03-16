<!-- 
    OVERVIEW
    This page is displayed when the user navigates to a page that does not exists
 -->

<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img src="images/logo-light.svg" class="mb-2" style="width:170px; height:170px;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%);">
                <div class="flex justify-content-center h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="grid flex-column align-items-center">
                        <span class="text-blue-500 font-bold text-3xl">404</span>
                        <h1 class="text-900 font-bold text-3xl lg:text-5xl mb-2">Looks like you are lost...</h1>
                        <span class="text-gray-600">Requested resource is not available.</span>
                        <div class="col-12 mt-3 text-center">
                            <i class="pi pi-fw pi-arrow-left text-blue-500 mr-2" style="vertical-align:center;"></i>
                            <router-link to="/" class="text-blue-500">Back to Main</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from '../AppEventBus.js';
export default {
    beforeMount() {
        this.dark = localStorage.getItem("theme") === "true"
        if (this.dark) {
            EventBus.emit('theme-change', { theme: 'lara-dark-indigo', dark: true });
        } else {
            EventBus.emit('theme-change', { theme: 'lara-light-indigo', dark: false });
        }
    },
}
</script>