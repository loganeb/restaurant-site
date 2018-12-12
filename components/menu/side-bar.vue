<template>
    <div class="side-bar">
        <div v-for="section in sections" class="section-link" :key="section">
            <a @click="setSelection(section)">{{ section }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sections: Array,
    },
    methods:{
        setSelection(key){
            this.$store.commit('setSelection', key );
        }
    }
}
</script>
