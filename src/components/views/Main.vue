<template>
    <div>
        <div id="about">
            <router-link to="/home" :class="this.$route.path === '/home' ? 'active' : ''">Home</router-link>
            <span>|</span>
            <router-link to="/about" :class="this.$route.path === '/about' ? 'active' : ''">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
}
</script>

<style lang='less' scoped>
#about {
    padding-top: 20px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    transition: all 0.3s linear;
    text-align: center;
    text-decoration: none;
    color: grey;

    &:hover {
        filter: invert(50%);
    }
}

span {
    margin: 0 5px;
}

.active {
    color: black;
    text-shadow: 0 0 2px peru;
}
</style>