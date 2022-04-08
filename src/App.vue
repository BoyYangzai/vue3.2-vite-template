<template>
    <img
        alt="Vue logo"
        src="@/assets/pictures/yang.jpg"
        style="width: 5vw"
    />
    <div>
        <div class="f">Yang的工程化集成</div>
    </div>

    <HelloWorld />
    <router-view></router-view>
</template>
<script setup lang="ts">
import { yangMessage } from './components/Message/Message';

yangMessage({
    message: 'Yang,加油',
    type: 'success',
    closeTimeout: 3000
});
let b = {
    name: 'yang',
    test: 'qaq'
};
</script>

<style>
#app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial,
        sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.f {
    font-size: 2vw;
    color: rgb(255 157 0 / 80.8%);
}
</style>
