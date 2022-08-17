<template>
    <div>
        <h3>{{ $t("message.main") }}</h3>
        <div class="ul_container">
            <ul>
                <div>
                    <li v-for="(item, index) in config.main.index" :key="index">
                        <router-link :to="{ name: 'Read', query: { id: item.id, line: 'main' } }">
                            <img v-lazy="'//' + config.main_domain + '/' + config.main.dir + '/' + item.id + '.jpg'"
                                alt="cover">
                            <span>
                                {{ item.id }}
                            </span>
                            <span>
                                {{ $i18n.locale === 'cn' ? item.cn : item.tw }}
                            </span>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
        <h3>{{ $t("message.branch") }}</h3>
        <div class="ul_container">
            <ul>
                <div>
                    <li v-for="(item, index) in config.branch.index" :key="index">
                        <router-link :to="{ name: 'Read', query: { id: item.id + '', line: 'branch' } }">
                            <img v-lazy="'//' + config.branch_domain + '/' + config.branch.dir + '/' + item.id + '.png'"
                                alt="cover">
                            <span>
                                {{ item.id }}
                            </span>
                            <span>
                                {{ $i18n.locale === 'cn' ? item.cn : item.tw }}
                            </span>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
        <h3>{{ $t("message.others") }}</h3>
        <div class="ul_container">
            <ul>
                <div>
                    <li v-for="(item, index) in config.others.index" :key="index">
                        <router-link :to="{ name: 'Read', query: { id: item.id, line: 'others' } }">
                            <img v-lazy="'//' + config.other_domain + '/' + config.others.dir + '/' + item.id + '/1.jpg'"
                                alt="cover">
                            <span>
                            </span>
                            <span>
                                {{ $i18n.locale === 'cn' ? item.cn : item.tw }}
                            </span>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'BookIndex',
    data() {
        return {
            config: this.$config,
            language: this.$i18n.locale
        }
    }, created() {

    }
}
</script>

<style lang='less' scoped>
h3 {
    margin: 40px 0 0;
}

.ul_container {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    color: #2c3e50;
    max-width: 880px;
    list-style-type: none;
    padding: 0;
}

li {
    width: 200px;
    height: auto;
    display: inline-block;
    margin: 15px 10px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgb(98, 98, 98);
    transition: all 0.5s ease-in-out;

    img {
        width: 200px;
        height: 250px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        transition: all 0.5s ease-in-out;
        margin: 0;
    }

    &:hover {
        img {
            transform: scale(1.2);
            transition: all 0.5s ease-in-out;
        }

        transition: all 0.5s ease-in-out;
    }

    span:nth-child(2) {
        color: red;
    }

}

a {
    color: #2c3e50;
    text-decoration: none;
}
</style>