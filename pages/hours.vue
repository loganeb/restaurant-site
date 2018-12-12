<template>
    <div class="hours">
        <navigation></navigation>
        <div class="title open">
            <span v-if="isOpen">We are open!</span>
            <span v-else>We are closed.</span>
        </div>
        <div class="display-hours container">
            <div v-for="day in hours" class="day columns" :key="day.day">
                <h3 class="subtitle column">{{ day.day}}</h3>
                <div class="column">
                    <div>Open: {{day.open > 12 ? day.open-12 + ':00 PM' : day.open + ':00 AM'}}</div>
                    <div>Close: {{day.close > 12 ? day.close-12 + ':00 PM' : day.close + ':00 AM'}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
    components:{
        Navigation,
    },
    created(){
        this.date = new Date();
    },
    data(){
        return {
            date: {},
        }
    },
    computed: {
        isOpen(){
            return this.date.getHours() > this.todaysHours.open 
                && this.date.getHours() < this.todaysHours.close;
        },
        todaysHours(){
            return this.$store.state.hours[this.date.getDay()];
        },
        hours(){
            return this.$store.state.hours;
        }
    }
}
</script>

<style>
.open{
    text-align: center;
}

.display-hours{
    text-align: center;
    max-width: 700px;
}

.day{
    border-bottom: 2px solid #ccc;
}
</style>


