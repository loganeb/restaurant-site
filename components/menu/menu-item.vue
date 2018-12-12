<template>
    <div class="res-menu-item container">
        <div class="subtitle item-title">{{ title }}</div>
        <p>{{ description }}</p>
        <div class="price">$ {{ price.toFixed(2) }}</div>
        <img :alt="title" :src="image" class="item-image"/>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        price: Number,
        image: String,
    }
}
</script>

<style>
.item-image{
    width: 300px;
    max-width: 100%;
}

</style>


