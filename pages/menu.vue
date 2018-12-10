<template>
    <appetizers></appetizers>
</template>

<script>
import Appetizers from '../components/menu/appetizers.vue';

export default {
    components:{
        Appetizers,
    },
    created(){
        this.$store.dispatch('loadItems');
    }    
}
</script>

