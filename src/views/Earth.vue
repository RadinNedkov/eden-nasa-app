<template>
    <div class="w-5/6 lg:w-2/4 mx-auto mt-8 mb-12">
        <form action="#">
            <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <p class="text-base lg:text-center">Please provide your locations coordinates below to see the latest "Earth" image for your location.</p>
                    <div class="grid grid-cols-6 gap-6 mt-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="latitude" class="block text-sm font-medium text-gray-700">Latitude</label>
                            <input v-model="latitude" placeholder="22.45" type="text" name="latitude" id="latitude" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="longtitude" class="block text-sm font-medium text-gray-700">Longtitude</label>
                            <input v-model="longtitude" placeholder="-32.45" type="text" name="longtitude" id="longitude" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <img v-if="data.url"
        :src="data.url" :alt="'from ' + data.date">
        <p v-else
        class="lg:text-center text-red-600 mt-8">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NASA_URL, API_KEY } from '../resources/constants'

const Earth = Vue.extend({
    data() {
        return {
            data: {},
            error: 'No results for the given coordinates.',
            latitude: '1.5',
            longtitude: '100.75',
        }
    },
    created() {
        this.getLocationEarthImage(this.coordinates);
    },
    methods: {
        getLocationEarthImage(value: any) {
            this.$http.get(NASA_URL + '/planetary/earth/imagery?' + this.coordinates + '&' + API_KEY)
            .then((response) => {
                this.data = response.data
            });
        }
    },
    computed: {
        coordinates():string{
            return 'lon=' + this.longtitude + '&lat=' + this.latitude + `&date=${new Date().toISOString().slice(0, 10)}`
        }
    },
    watch: {
        'coordinates'(change) {
            this.getLocationEarthImage(change);
        }
    }
});

export default Earth;
</script>