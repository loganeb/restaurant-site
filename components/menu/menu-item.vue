<template>
    <div class="res-menu-item container">
        <div class="subtitle item-title">{{ title }}</div>
        <p>{{ description }}</p>
        <div class="price">$ {{ price }}</div>
        <img :alt="title" :src="image"/>
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

