<template>
    <div class="w-2/3 lg:w-2/4 mx-auto mt-12">

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NASA_URL } from '../resources/constants'
const APOD = Vue.extend({
    data() {
        return {
            apiKey: 'api_key=DSkVsLRAEdMjcfO78LWBbbv8kKdH97wIEdOilQfe'
        }
    },
    created() {
        this.getPictureOfTheDay();
    },
    methods: {
        getPictureOfTheDay() {
            this.$http.get(NASA_URL + '/planetary/apod?' + this.apiKey).then((response) => {
                console.log(response.data)
            })
        },
    }
});

export default APOD
</script>