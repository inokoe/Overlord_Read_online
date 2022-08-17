<template>
    <div class="container">
        <img id="cn" :class="language == 'cn' ? '' : 'selectLanguage'" @click="changeLanguage('cn')"
            src="../assets/cn.svg" alt="">
        <img id="tw" :class="language == 'cn' ? 'selectLanguage' : ''" @click="changeLanguage('tw')"
            src="../assets/tw.svg" alt="">
    </div>
</template>

<script type="text/javascript">
// import { mapState } from 'vuex'
export default {
    name: 'ChangeLanguage',
    data() {
        return {
            language: 'cn'
        }
    },
    methods: {
        changeLanguage(country) {
            if (this.language === country) return
            this.$store.commit('changeLanguage')
            this.$i18n.locale = this.$store.state.language
            this.language = this.$store.state.language
        }
    }, mounted() {
        this.$store.dispatch('getLanguage')
        this.$i18n.locale = this.$store.state.language
        this.language = this.$store.state.language
        window.addEventListener("storage", (e) => {
            if (e.key === 'Language') {
                if (e.newValue != this.$store.state.language) {
                    this.$store.commit('changeLanguage')
                    this.$i18n.locale = this.$store.state.language
                }
            }
        });
    },
    computed: {
        getLanguage() {
            return this.$store.state.language
        }
    }, watch: {
        getLanguage: function (newValue) {
            this.language = newValue;
        }
    }, destroyed() {
        window.removeEventListener('storage', () => { })
    },
}
</script>

<style lang='less' scoped>
.container {
    user-select: none;
    height: 25px;
    box-sizing: border-box;
    line-height: 25px;
    margin: 0 10px;

    >div {
        box-sizing: border-box;
        height: 25px;
        line-height: 25px;
        display: inline-block;
    }
}

.selectLanguage {
    filter: invert(40%);
}

img {
    transition: all 0.5s linear;
    max-height: 23px;
    padding: 0 5px;
}
</style>