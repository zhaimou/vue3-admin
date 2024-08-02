<template>
    <div class="commom-layout">
        <el-container class="lay-container">
            <common-aside></common-aside>
            <el-container>
                <el-header class="el-header">
                    <commonHeader></commonHeader>
                </el-header>
                <common-tab></common-tab>
                <el-main class="right-main">
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import commonAside from '../components/commonAside.vue';
import commonHeader from '../components/commonHeader.vue';
import commonTab from '../components/commonTab.vue';
</script>

<style scoped lang="scss">
.commom-layout, .lay-container{
    height:100%;
}
.el-header{
    background-color: #333;
}
</style>
