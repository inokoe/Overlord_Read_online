<template>
    <div class="container">
        <div class="box"></div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'ToNotify',
    data() {
        return {

        }
    },
}
</script>

<style lang='less' scoped>
.container {
    width: 100%;
    position: fixed;
    top: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
        height: 25px;
        width: 50px;
        background-color: black;
    }
}
</style>