import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
import { useStore } from './store';

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app');

// //全局路由守卫
// const store = useStore();
// router.beforeEach((to, from, next) => {
//     // store.tagList = JSON.parse(window.localStorage.getItem("tagList") as string);
//     //pinia状态持久化
//     if (to.name !== 'login') {
//         if (
//             window.localStorage.getItem(
//                 'token'
//             ) !== null &&
//             window.localStorage.getItem(
//                 'token'
//             ) != 'null'
//         ) {
//             store.getUserInfo(
//                 window.localStorage.getItem(
//                     'userId'
//                 ) as string
//             );
//             next();
//         } else if (
//             window.localStorage.getItem(
//                 'token'
//             ) == null ||
//             window.localStorage.getItem(
//                 'token'
//             ) == 'null'
//         ) {
//             next({
//                 name: 'login'
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });
