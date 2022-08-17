<template>
    <div class="aboutContainer">
        <Logo></Logo>
        <div>
            <h1>About</h1>
            <p>{{ $t("message.about_desc") }}</p>
            <div>
                <p>"vue": "^2.6.14"</p>
                <p>"vue-i18n": "^8.27.0"</p>
                <p>"vue-lazyload": "^1.3.4"</p>
                <p>"vue-router": "^3.5.4"</p>
                <p>"vuex": "^3.6.2"</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Logo from '@/components/views/Logo.vue'
export default {
    name: 'AppAoubt',
    data() {
        return {

        }
    }, components: {
        Logo
    }
}
</script>

<style lang='less' scoped>
.aboutContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    min-height: calc(100vh - 40px);
    text-align: center;

    img {
        max-width: 100%;
    }
}
</style>