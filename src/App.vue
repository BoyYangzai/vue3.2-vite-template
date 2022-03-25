<template>
    <img
        alt="Vue logo"
        src="./assets/logo.png"
    />
    <div>Yang的工程化集成</div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <router-view></router-view>
</template>
<script
    setup
    lang="ts"
>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
let b = {
    name: 'yang',

    test: 'qaq'
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
