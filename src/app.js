/**
 * Virtual Endpoints
 */
import 'whatwg-fetch'; // Fetch API Polyfill

// import { createApp } from 'vue';
import { createApp } from "vue/dist/vue.esm-bundler.js"

// import Store from "./store.js";
import Main from "./main.js"

createApp(Main).mount("#app");