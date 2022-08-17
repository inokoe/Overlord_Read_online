<template>
    <div class="container">
        <Logo></Logo>
        <h1>{{ $t("message.msg") }}</h1>
        <p>{{ $t("message.desc") }}</p>

        <div class="tools">
            <DarkModel />
            <ChangeLanguage />
        </div>

        <BookIndex></BookIndex>

        <ToNotify></ToNotify>
    </div>
</template>

<script>
import DarkModel from '@/components/DarkModel.vue'
import ChangeLanguage from '@/components/Language.vue'
import BookIndex from '@/components/BookIndex.vue'
import ToNotify from '@/components/Notify.vue'
import Logo from '@/components/views/Logo.vue'
export default {
    name: 'MyHome',
    data() {
        return {
        }
    },
    props: {

    },
    components: {
        Logo,
        DarkModel,
        ChangeLanguage,
        BookIndex,
        ToNotify
    }, beforeCreate() {

    }
}
</script>

<style lang="less" scoped>
.container {
    text-align: center;
    color: #2c3e50;
}

.tools {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
