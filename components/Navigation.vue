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
                <a class="navbar-item">
                Hours
                </a>
                <a class="navbar-item">
                    Directions
                </a>
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

    .navbar{
        max-width: 100vw;
        margin-right: 20px;
        margin-left: 5px;
    }
</style>

