<script setup>
// import {watch} from 'vue'
// import {useAllDataStore} from './stores/index.js'
// const store = useAllDataStore()
// watch(store.$state,(newVal) => {
//     if(!newVal.token) return;
    
//     localStorage.setItem("store",JSON.stringify(newVal))
// })
</script>

<template>
    <router-view>
    </router-view>   
</template>

<style lang="scss">
#app{
    width:100%;
    height:100%;
    overflow:hidden;
}
</style>
