<template>
    <div class="ReadArea">
        <div class="ReadAreaProgressBar"></div>
        <div v-if="readMenuStatus === true" class="ReadMenuBar">
            <table>
                <tr>
                    <th>Chapter</th>
                    <th>Pages</th>
                </tr>

                <tr v-for="(item, index) in menu" :key="index">
                    <td :class="progress == parseInt(index) + 1 ? 'li_selected' : ''"
                        @click="progress = parseInt(index) + 1">{{ $i18n.locale === 'cn' ?
                        item.cn : item.tw
                        }}</td>
                    <td>{{ parseInt(item.end) - parseInt(item.start) + 1 }}</td>
                </tr>
            </table>
        </div>
        <div class="imgArea">
            <div v-for="(chapter, index) in menu.slice(progress - 1, progress)" :key="index">
                <h3 class="">{{ $i18n.locale === 'cn' ? chapter.cn : chapter.tw }}</h3>
                <ul>
                    <li v-for="(count, index) in (parseInt(chapter.end) - parseInt(chapter.start) + 1)" :key="index">
                        <!-- {{ '当前' + (parseInt(chapter.start) + parseInt(index)) }}
                {{ 'index' + parseInt(index) }} -->
                        <img v-lazy="'//' + domain + '/' + line + '/' + id + '/' + (parseInt(chapter.start) + parseInt(index)) + '.jpg'"
                            :alt="(parseInt(chapter.start) + parseInt(index)) + '.jpg'">
                    </li>
                </ul>
                <div class="buttonGroup">
                    <button class="PreNextBook" v-if="nowBookIndex != 0"
                        @click="$router.push(bookIndex[nowBookIndex-1])">[Pre]
                        {{nowBookIndex-1}} {{
                        $i18n.locale
                        === 'cn' ? bookName[nowBookIndex
                        - 1].cn :
                        bookName[nowBookIndex -
                        1].tw
                        }}</button>
                    <button v-if="progress != 1" @click="progress--">← {{ $i18n.locale === 'cn' ? menu[progress
                    - 2].cn :
                    menu[progress -
                    2].tw
                    }}</button>
                    <button v-if="progress != menu.length" @click="progress++">{{ $i18n.locale === 'cn' ?
                    menu[progress].cn :
                    menu[progress].tw
                    }} →</button>
                    <button class="PreNextBook" v-if="nowBookIndex+1 != bookIndex.length"
                        @click="$router.push(bookIndex[nowBookIndex+1])">[Next] {{nowBookIndex+1}} {{
                        $i18n.locale
                        === 'cn' ? bookName[nowBookIndex+1].cn :
                        bookName[nowBookIndex+1].tw
                        }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

export default {
    name: 'ReadArea',
    data() {
        return {
            id: '1',
            nowBookIndex: 1,
            bookIndex: [],
            bookName: [],
            // 进度
            progress: 1,
            // 线路
            line: 'main',
            // 当前线路里的全部书本数据
            config: '',
            // 域名
            domain: '',
            // 目录
            dir: '',
            // 开始
            start: 0,
            // 结束
            end: 0,
            // 章节目录
            menu: [],
            readMenuStatus: false,
            browserProgress: 0
        }
    }, created() {
        if (this.$route.query.id) this.id = this.$route.query.id;
        if (this.$route.query.line) this.line = this.$route.query.line;
        if (parseInt(this.$route.query.progress)) this.progress = parseInt(this.$route.query.progress)
        if (this.line === 'main') this.domain = this.$config.main_domain
        if (this.line === 'branch') this.domain = this.$config.branch_domain
        if (this.line === 'others') this.domain = this.$config.other_domain
        this.config = this.$config[this.line]
        this.dir = this.config.dir
        this.config = this.config.index
        this.config.forEach(element => {
            if (element.id + '' == this.id) {
                this.end = element.end
                this.menu = element.menu
                return
            }
        });
        this.getBookIndex()
    }, mounted() {
        this.$bus.$on('showReadMenu', (data) => {
            this.readMenuStatus = data
        })
    }, methods: {
        getBookIndex() {
            let arr = ['main', 'branch', 'others']
            arr.forEach(ele => {
                let config = this.$config[ele]
                config = config.index
                config.forEach(element => {
                    let data = { query: { id: element.id + '', line: ele } }
                    let name = { tw: element.tw, cn: element.cn }
                    this.bookName.push(name)
                    this.bookIndex.push(data)
                    if (element.id == this.id) {
                        this.nowBookIndex = this.bookIndex.length - 1
                    }
                })
            })
        },
    }, watch: {
        progress: function (oldValue, newValue) {
            if (oldValue === newValue) return
            if (this.readMenuStatus) {
                this.readMenuStatus = false
                this.$bus.$emit('setReadMenuStatus', false)
            }
            document.documentElement.scrollTop = 0
            this.browserProgress = 0
            const { ...query } = this.$route.query;
            if (this.$route.query.progress) {
                if (this.progress !== parseInt(this.$route.query.progress)) {
                    this.$router.push({ query: { ...query, progress: this.progress } })
                }
            } else {
                this.$router.push({ query: { ...query, progress: this.progress } })
            }
            document.querySelector('.ReadAreaProgressBar').style.width = (this.progress / this.menu.length) * 100 + '%';
        },
    }, beforeDestroy() {
        this.$bus.$off('showReadMenu')
    }, updated() {
    },
}
</script>

<style lang='less' scoped>
ul {
    list-style: none;
    appearance: none;
    padding-inline-start: 0px;
}

.PreNextBook {
    color: orangered;
}

.ReadArea {
    user-select: none;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    box-shadow: 0 0 10px #ccc;

    .imgArea {
        width: 80%;
        overflow: hidden;

        img {
            max-width: 100%;
        }

        h3 {
            font-size: 30px;
            max-width: 100%;
            text-align: center;
        }
    }

    .buttonGroup {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        >button {
            appearance: none;
            height: 50px;
            width: 80px;
            margin: 0px 20px 20px 20px;
            cursor: pointer;
            overflow: hidden;
            font-size: 10px;
        }
    }

    .ReadAreaProgressBar {
        position: fixed;
        top: 50px;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: rgba(0, 255, 255, 0.623);
    }

    .ReadMenuBar {
        position: fixed;
        top: 50px;
        left: 0;
        max-width: 100%;
        min-height: calc(100vh - 50px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ccc;

        table,
        td,
        tr {
            border: 1px solid black;
        }

        table {
            max-width: 450px;
        }

        tr {
            font-size: 20px;

            td:nth-of-type(1) {
                text-align: left;
                cursor: pointer;
                color: rgb(39, 121, 90);
            }
        }

    }
}

.li_selected {
    color: red !important;
    // cursor: auto !important;
}

@media screen and (max-width:1000px) {
    .ReadArea {
        .imgArea {
            width: 100%;

            ul {
                width: 100%;
                padding-inline-start: 0px;
            }
        }
    }
}
</style>