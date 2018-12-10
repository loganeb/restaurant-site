<template>
    <div class="appetizers menu-page">
        <h1>Appetizers</h1>
        <menu-item 
        v-for="item in items" 
        :key="item.title" 
        :title="item.title" 
        :description="item.description" 
        :price="item.price"
        :image="item.image"
        ></menu-item>
    </div>
</template>

<script>
import MenuItem from './menu-item.vue';

export default {
    components: {
        MenuItem,
    },
    computed:{
        items(){
            console.log(this.$store.state);
            return this.$store.state.appetizers;
        }
    }
}
</script>

