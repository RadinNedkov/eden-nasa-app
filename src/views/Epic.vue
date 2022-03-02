<template>
    <div class="w-5/6 lg:w-2/4 mx-auto mt-8 mb-12">
        <p class="text-lg lg:text-center">"The most recent enhanced Earth image" <span class="text-indigo-700 hidden lg:inline-block">|</span> Want to see a specific date? - <Datepicker class="lg:ml-1 lg:w-1/6 inline-block" 
            placeholder="Select Date" 
            v-model="newDate" 
            :format="'yyyy-MM-dd'" /></p>

        <img v-if="loaded && image"
        class="border-4 border-indigo-700 rounded-md mt-8"
        type="image/jpeg"
        :src="url">
        <p v-else
        class="lg:text-center text-red-600 mt-8">{{ error }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NASA_URL, API_KEY } from '../resources/constants'
import Datepicker from "vuejs-datepicker";

const Epic = Vue.extend({
    data() {
        return {
            image: {},
            imageDate: '',
            imageName: '',
            error: '',
            loaded: false,
            newDate: '',
        }
    },
    created() {
        this.getEpicData(this.imageDate);
    },
    methods: {
        getEpicData(value: any) {
            this.$http.get(NASA_URL + '/EPIC/api/natural?' + API_KEY)
            .then((response) => {
                if(response.status == 200) {
                    this.imageDate = response.data[0].date;
                    this.imageName = response.data[0].image;
                } else {
                    this.error += 'No results found.'
                }
                this.loaded = true
            });
        },
        getByDate(value: any) {
            this.$http.get(NASA_URL + '/EPIC/api/natural/date/' + `${this.newDate}?` + API_KEY)
            .then((response) => {
                if(response.status == 200) {
                    this.imageDate = response.data[0].date;
                    this.imageName = response.data[0].image;
                } else {
                    this.error += 'No results found.'
                }
                this.loaded = true
            });
        },
    },
    computed: {
        date(): string {
            return this.imageDate.substring(0, 4) + '/' + this.imageDate.substring(5, 7) + '/' + this.imageDate.substring(8, 10)
        },
        url(): string {
            return NASA_URL + '/EPIC/archive/natural/' + this.date + `/jpg/${this.imageName}.jpg?` + API_KEY
        }
    },
    watch: {
        'newDate'(newValue) {
            this.newDate = new Date(newValue).toISOString().slice(0, 10);
            this.getByDate(newValue);
        }
    },
    components: {
        Datepicker
    }
});

export default Epic;
</script>