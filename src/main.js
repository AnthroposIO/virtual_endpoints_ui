/**
 * Main Component
 */
import Header from "./header.js";
import Home from "./home.js";
import Store from "./store.js";

// import { Amplify } from 'aws-amplify';
// let awsconfig;
// import ( /* webpackIgnore: true */ './aws-exports.js').then((module) => {
//     awsconfig = module.default;
//     Amplify.configure(awsconfig);
//     console.log("*** AWSCONFIG ***");
//     console.log(awsconfig);
// });

const routes = {
    '/': Home,
}

export default {
    components: {
        Header
    },
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        // Observable property is updated when currentPath changes
        // Updates route, which is used in :is= template
        currentView() {
            // Get authenctication if set (true/false)
            let is_authenticated = Store.is_authenticated();
            // Get the Path from the url
            let path = this.currentPath.slice(1) || '/'

            // Redirect regardless to authentication if not authed and trying to access another path
            if (is_authenticated === false && path !== "/") {
                window.location = "/";
                // This code essentially stops here.
            }

            // Get the route
            let route = routes[path] || "NotFound";

            console.log(`view: ${path} ${is_authenticated}`);

            return route;
        }
    },
    // Called after the application is mounted. 
    mounted() {
        // Register an on_change handler for the URL hash.
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash
        })
    },
    template: `
      <Header />
      <div class="container">
        <component :is="currentView" />
      </div>
 
    `
}