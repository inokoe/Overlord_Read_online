<template>
    <div class="aboutContainer">
        <Logo></Logo>
        <div>
            <h1>About</h1>
            <div class="tools">
                <DarkModel />
                <ChangeLanguage />
            </div>
            <p class="warning">Warning, do not reprint these Image.</p>
            <p class="msg">{{ $t("message.about_desc") }}</p>
            <a href="https://github.com/inokoe/Overlord_Read_online.git" target="_blank">GITHUB {{config.version}}</a>
            <div class="code">
                <h2>THANKS</h2>
                <div class="CDN">
                    <img src="https://api.netlify.com/api/v1/badges/3f0f614f-e550-4cfb-9663-ebcd9477fd9a/deploy-status"
                        alt="Netlify">
                    <img src="https://img.shields.io/badge/IMG_CDN-Bunny-brightgreen" alt="Bunny CDN">
                    <img src="https://img.shields.io/badge/IMG_CDN-Cloudflare-brightgreen" alt="Cloudflare CDN">
                </div>
                <div>
                    <p>"vue": "^2.6.14"</p>
                    <p>"vue-i18n": "^8.27.0"</p>
                    <p>"vue-lazyload": "^1.3.4"</p>
                    <p>"vue-router": "^3.5.4"</p>
                    <p>"vuex": "^3.6.2"</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import DarkModel from '@/components/DarkModel.vue'
import ChangeLanguage from '@/components/Language.vue'
import Logo from '@/components/views/Logo.vue'
import packageConfig from '../../../package.json'
export default {
    name: 'AppAoubt',
    data() {
        return {
            config: packageConfig
        }
    }, components: {
        Logo,
        DarkModel,
        ChangeLanguage,
    }
}
</script>

<style lang='less' scoped>
.tools {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.aboutContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    min-height: calc(100vh - 40px);
    text-align: center;
    padding: 0 20px 0 20px;

    img {
        max-width: 100%;
    }
}

.warning {
    color: orangered;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.msg {
    color: rgb(61, 116, 32);
    font-size: 15px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.version {
    color: blueviolet;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.code {
    color: brown;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 10px;
}

.CDN {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 130px;
        height: 20px;
        margin-top: 5px;
    }
}

a {
    text-decoration: none;
    font-size: 20px;
}
</style>