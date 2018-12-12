<template>
    <section class="menu container">
        <navigation/>
        <div class="menu-box columns is-mobile">
            <side-bar :sections="sectionNames" class="column is-one-fifth"></side-bar>
            <menu-section :title="selection.name" :items="selection.items" class="column is-three-fifths"></menu-section>
        </div>
    </section>
</template>

<script>
import MenuSection from '../components/menu/menu-section';
import Navigation from '../components/Navigation';
import SideBar from '../components/menu/side-bar';

export default {
    components:{
        MenuSection,
        Navigation,
        SideBar,
    },
    created(){
        this.$store.dispatch('loadItems');
    },
    data(){
        return{

        }
    },
    computed:{
        sections(){
            return this.$store.state.sections;
        },
        sectionNames(){
            return Object.keys(this.sections);
        },
        selection(){
            return this.$store.state.selection;
        }
    }    
}
</script>

<style>
.menu{
    max-height: 100vh;
    max-width: 100vw;
    margin-bottom: 0;
}

.menu-box{
    margin: 5px;
    margin-right: 0;
    margin-bottom: 0;
}

</style>


