<template>
    <div class="header_container">
        <img @click="$router.push('/')" class="logo" alt="overlord logo" src="./../assets/overlord.svg" />
        <div>
            <img @click="sendOpenMenuMsg()" alt="Menu" src="./../assets/menu.svg"
                :class="ReadMenuStatus === true ? 'MenuOpenStatusAni menu' : 'menu'" />
            <DarkModel />
            <ChangeLanguage />
        </div>
    </div>
</template>

<script type="text/javascript">
import DarkModel from '@/components/DarkModel.vue'
import ChangeLanguage from '@/components/Language.vue'
export default {
    name: 'ReadHeader',
    data() {
        return {
            ReadMenuStatus: false
        }
    }, components: {
        ChangeLanguage,
        DarkModel
    }, methods: {
        sendOpenMenuMsg() {
            this.$bus.$emit('showReadMenu', !this.ReadMenuStatus)
            this.ReadMenuStatus = !this.ReadMenuStatus
        }
    }, mounted() {
        this.$bus.$on('setReadMenuStatus', (data) => {
            this.ReadMenuStatus = data
        })
    }, beforeDestroy() {
        this.$bus.$off('setReadMenuStatus')
    },
}
</script>

<style lang='less' scoped>
.header_container {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 10px black;

    >img {
        max-height: 90%;
        filter: invert(100%);
        transition: all 0.3s linear;
        cursor: pointer;
    }

    >div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu {
        height: 27px;
        margin: 0 8px;
        cursor: pointer;
        filter: invert(100%);

        &:hover {
            animation: MenuShake 1s linear infinite;
        }
    }
}

.MenuOpenStatusAni {
    animation: MenuShake 1s linear infinite;
}

@keyframes MenuShake {
    0% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(0.95);
    }
}

@media screen and (max-width:400px) {
    .header_container {
        img {
            max-height: 30px;
            filter: invert(100%);
        }
    }

    .logo {
        height: 50px;
    }
}
</style>