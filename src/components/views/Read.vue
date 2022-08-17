<template>
    <div class="ReadPageConainter">
        <ReadHeader></ReadHeader>

        <ReadArea v-if="canWeRead === true"></ReadArea>

        <NotFound v-if="canWeRead === false"></NotFound>
    </div>
</template>

<script type="text/javascript">
import ReadHeader from '../ReadHeader.vue';
import ReadArea from '../ReadArea.vue'
import NotFound from '../views/NotFound.vue'
export default {
    name: 'ReadPages',
    data() {
        return {
            canWeRead: false
        }
    }, components: {
        ReadHeader,
        ReadArea,
        NotFound
    }, created() {
        let id = this.$route.query.id
        let line = this.$route.query.line
        let progress = 1
        let title = 'Overlord_オーバーロード'
        if (this.$route.query.progress) progress = parseInt(this.$route.query.progress)
        if (id && line) {
            if (line === 'main' || line === 'branch' || line === 'others') {
                let config = this.$config[line]
                config = config.index
                config.forEach(element => {
                    if (element.id + '' === id) {
                        title += '_' + element.cn
                        if (!progress || progress === 1) this.canWeRead = true
                        else {
                            if (parseInt(progress) <= element.menu.length) {
                                this.canWeRead = true
                            }
                        }
                    }
                    if (this.canWeRead) return
                });
            }
        }
        if (this.canWeRead) {
            document.title = title
        }
    },
}
</script>

<style lang='less' scoped>
// .ReadPageConainter {}
</style>