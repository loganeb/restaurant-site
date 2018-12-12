<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                Pop's
            </router-link>
            <div role="button" class="navbar-burger" 
                aria-label="menu" aria-expanded="false" @click="toggleMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-menu" id="navMenu" :class="{'is-active' : menuActive}">
                <router-link to="/menu" class="navbar-item">
                Menu
                </router-link>
                <router-link to="/hours" class="navbar-item">
                Hours
                </router-link>
                <router-link to="/directions" class="navbar-item">
                    Directions
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            menuActive: false,
        }
    },
    methods:{
        toggleMenu(){
            this.menuActive = !this.menuActive;
        }
    }
}

</script>


<style>
    .icon{
        color: #000;
    }

    .navbar {
        max-width: 100%;
        background: #fff;
    }
</style>

