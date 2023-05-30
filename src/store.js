/**
 * Store
 */

import { reactive } from "vue"

const store = reactive({
    /**
     * 
     * @returns 
     */
    is_authenticated: function() {
        // if (this.user !== undefined) {
        return true;
        // } else {
        //     return false;
        // }
    }
});

export default store