<template>
    <div class="menu-section">
        <h1 class="title">{{ title }}</h1>
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
.menu-section{
    margin-left: 35px;
    word-wrap: normal;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 85vh;
    padding: 0;
    padding-right: 5px;
}

.menu-section::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: none;
}

.menu-section::-webkit-scrollbar-thumb {
    background: #666;
    -webkit-border-radius: 2ex;
}


.items{
    margin: 0;

}
</style>


