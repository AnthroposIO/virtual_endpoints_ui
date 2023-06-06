/**
 * Store
 */

import { reactive } from "vue"

const store = reactive({
    /**
     * 
     * @returns 
     */
    is_authenticated: () => {
        return true;
    },

    send_to_cloudface: async (url, auth, body) => {
        let _body = body;
        if(typeof _body === "object"){
            _body = JSON.stringify(body)
        }

        const response = await fetch(url,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                'Authorization': auth
            },
            body: _body
        });
        const jsonData = await response.json();
        // console.log(jsonData);
        return jsonData;
    },
    /**
     * 
     * @param {*} url 
     * @param {*} auth 
     * @param {*} body 
     * @returns 
     */
    send_to_amq: async (url, auth, body) => {
        console.log("sending to amq");

        // CloudFace Call
        let json = await store.send_to_cloudface(url,auth,body);

        return { ok:true, json }
    },
    /**
     * 
     * @param {*} url 
     * @param {*} auth 
     * @param {*} body 
     * @returns 
     */
    send_to_mqtt: async (url, auth, body) => {
        console.log("sending to mqtt");

        // CloudFace Call
        let json = await store.send_to_cloudface(url,auth,body);

        return { ok:true, json }
    }
});

export default store