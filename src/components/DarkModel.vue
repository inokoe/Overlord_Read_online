<template>
    <div class="container" :style="this.$store.state.darkModel === 'true' ? 'background-color: #ccc' : ''"
        @click="ModelChange">
        <span :class="this.$store.state.darkModel === 'true' ? 'circle-on' : 'circle'">
            <img src="../assets/dark.svg" alt="">
        </span>
        <span :class="this.$store.state.darkModel === 'true' ? 'text-on' : 'text'">{{ this.$store.state.darkModel ===
                'true' ? 'ON' :
                'OFF'
        }}</span>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'DarkModel',
    data() {
        return {
        }
    }, methods: {
        ModelChange() {
            this.$store.commit('changeDarkModel')
        }
    }, mounted() {
        window.addEventListener("storage", (e) => {
            if (e.key === 'DarkModel') {
                if (e.newValue != this.$store.state.darkModel) {
                    this.$store.commit('changeDarkModel')
                }
            }
        })
    }, destroyed() {
        window.removeEventListener('storage', () => { })
    }
}
</script>

<style lang='less' scoped>
img {
    max-height: 100%;
}

.container {
    user-select: none;
    width: 60px;
    height: 25px;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    border: 1px solid white;
    background-color: white;
    box-shadow: 0 0 3px black;

    .circle {
        position: absolute;
        width: 15px;
        height: 15px;
        top: 4px;
        left: 5px;
        background-color: rgb(255, 255, 255);
        border-radius: 50%;
        box-shadow: 0 0 10px white;
        transition: all .5s;
    }

    .text {
        position: absolute;
        right: 10px;
        line-height: 25px;
        color: black;
        transition: all .5s;
    }
}

.text-on {
    .container .text();
    right: 30px !important;
    color: #888 !important;
}

.circle-on {
    .container .circle();
    left: 40px !important;
    background-color: #888 !important;
    box-shadow: 0 0 10px #888 !important;
}
</style>