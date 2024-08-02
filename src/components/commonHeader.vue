<template>
<div class="header">
    <div class="l-content">
        <el-button size="small" @click="handleCollapse">
            <component class="icons" is="menu"></component>
        </el-button>
        <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">{{current.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="r-content">
    <el-dropdown>
    <span class="el-dropdown-link">
        <span><img :src="getImageUrl('user')"  class="user"></span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>
</div>

</template>

<script setup>
import {useAllDataStore}from '../stores/index.js'
import {useRouter}from 'vue-router'
import {computed} from 'vue'
const router = useRouter()
const AllData = useAllDataStore()
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`,import.meta.url).href
} 
const current = computed(()=>AllData.$state.currentMenu)
const handleCollapse = () => {
    AllData.$state.isCollapse = !AllData.$state.isCollapse
}
const handleLoginOut = () => {
    AllData.clean()
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
    width:100%;
    background-color: #333;
}
.icons{
    height:20px;
    width:20px;
}
.l-content{
    display: flex;
    align-items: center;
   .el-button{
        margin-right:20px;
    }
}
.r-content{
    .user{
        width:40px;
        height:40px;
        border-radius: 50%;
        outline: none;
    }
}
//样式穿透
:deep(.bread span){
    color:#fff !important;
    cursor:pointer !important;
}
</style>