import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloPatient from "./components/HelloPatient";

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);


// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/user/:uuid', component: HelloPatient}
    ]
});

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
// new Vue({
//     router,
//     template: `
//     <div id="app">
//       <h1>Basic</h1>
//       <ul>
//         <li><router-link to="/">/</router-link></li>
//         <li><router-link to="/foo">/foo</router-link></li>
//         <li><router-link to="/bar">/bar</router-link></li>
//         <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
//           <a>/bar</a>
//         </router-link>
//         <li><router-link to="/é">/é</router-link></li>
//       </ul>
//       <router-view class="view"></router-view>
//     </div>
//   `
// }).$mount('#app')
export default router;
