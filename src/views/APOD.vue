<template>
    <div class="w-5/6 lg:w-2/4 mx-auto mt-8 lg:text-center mb-12">
        <div class="text-lg">
            <p class="inline-block">Astronomy Picture of </p>
            <Datepicker class="lg:ml-1 lg:w-1/6 inline-block" 
            placeholder="Select Date" 
            v-model="newDate" 
            :format="'yyyy-MM-dd'" />
        </div>
        <p v-if="data.title" class="mt-8 text-base">"{{ data.title }}" by {{ data.copyright }}</p>
        <img v-if="data.url" 
        class="border-4 border-indigo-700 rounded-md"
        :src="data.url" 
        :alt="data.title">
        <p class="mt-4 text-red-600" v-else>{{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NASA_URL, API_KEY } from '../resources/constants'
import Datepicker from "vuejs-datepicker";

const APOD = Vue.extend({
    data() {
        return {
            data: {},
            newDate: '',
            error: 'No results for the given date.'
        }
    },
    created() {
        this.actualDate();
    },
    methods: {
        getPictureOfTheDay(value: any) {
            this.$http.get(NASA_URL + '/planetary/apod?' + API_KEY + '&date=' + this.newDate)
            .then((response) => {
                this.data = response.data
            });
        },
        actualDate() {
            this.newDate = new Date().toISOString().slice(0, 10)
        }
    },
    watch: {
        'newDate'(newValue) {
            this.newDate = new Date(newValue).toISOString().slice(0, 10);
            this.getPictureOfTheDay(newValue);
        }
    },
    components: {
        Datepicker
    }
});

export default APOD
</script>