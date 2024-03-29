<template>
    <div class="relative bg-white">
        <div class="max-w-full px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <router-link to="/">
                        <span class="sr-only">Logo</span>
                        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </router-link>
                </div>
                <div class="-mr-2 -my-2 md:hidden">
                    <button @click="mobileMenuActive(true)" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                <nav v-if="$auth.isAuthenticated" 
                class="hidden md:flex space-x-10">
                    <router-link to="/apod" 
                    class="text-base font-medium text-gray-500 hover:text-gray-900"> APoTD </router-link>
                    <router-link to="/earth" 
                    class="text-base font-medium text-gray-500 hover:text-gray-900"> Earth </router-link>
                    <router-link to="/epic" 
                    class="text-base font-medium text-gray-500 hover:text-gray-900"> EPIC </router-link>
                </nav>
                <div v-else
                class="hidden md:flex space-x-10">Please sign in in order to navigate.</div>

                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <router-link to="/profile" v-if="$auth.isAuthenticated" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Profile</router-link>
                    <button v-if="!$auth.isAuthenticated" @click="login" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign in</button>
                    <button v-if="$auth.isAuthenticated" @click="logout" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Sign out</button>
                </div>
            </div>
        </div>

        <div :class="mobileMenuExpanded ? '' : 'hidden'"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo">
                        </div>
                        <div class="-mr-2">
                            <button @click="mobileMenuActive(false)" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav v-if="$auth.isAuthenticated"
                        class="grid gap-y-8">

                            <router-link to="/apod" 
                            class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="ml-3 text-base font-medium text-gray-900"> APoTD </span>
                            </router-link>

                            <router-link to="/earth" 
                            class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="ml-3 text-base font-medium text-gray-900"> Earth </span>
                            </router-link>

                            <router-link to="/epic" 
                            class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                <span class="ml-3 text-base font-medium text-gray-900"> EPIC </span>
                            </router-link>
                        </nav>
                        <nav v-else class="grid gap-y-8">
                            <div>
                                Please sign in in order to navigate.
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5 space-y-6">
                    <div>
                        <button v-if="!$auth.isAuthenticated" @click="login" class="text-indigo-600 hover:text-indigo-500">Sign in</button>
                        <button v-if="$auth.isAuthenticated" @click="logout" class="text-indigo-600 hover:text-indigo-500">Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

const Header = Vue.extend({
    data() {
        return {
            mobileMenuExpanded: false
        }
    },
    methods: {
        mobileMenuActive(value: boolean) {
            this.mobileMenuExpanded = value
        },
        login() {
            this.$auth.loginWithRedirect();
        },
        logout() {
            this.$auth.logout({
                returnTo: window.location.origin
            });
        }
    }
});

export default Header;
</script>