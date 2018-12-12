<template>
    <div class="menu-section container">
        <h1 class="section-title">{{ title }}</h1>
        <div class="items">
            <menu-item 
            v-for="item in items" 
            :key="item.title" 
            :title="item.title" 
            :description="item.description" 
            :price="item.price"
            :image="item.image"
            ></menu-item>
        </div>
    </div>
</template>

<script>
import MenuItem from './menu-item.vue';

export default {
    components: {
        MenuItem,
    },
    props:{
        title: String,
        items: Array,
    }
}
</script>

<style>
.section-title{
    font-size: 30px;
}
.menu-section{
    margin-left: 30px;
    margin-bottom: 5px;
    max-width: 70vw;
    height: 100%;
}

.items{
    word-wrap: normal;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 75vh;
    padding: 0;
    padding-right: 5px;
}

.items::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: none;
}

.items::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
}

</style>


