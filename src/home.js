/**
 * Home
 * Virtual Endpoints
 */

import store from "./store.js"

export default {
    data() {
        return { 
            "url": "",
            "auth": "",
            "body": "",
            "result": ""
        }
    },
    methods: {
        async amq(evt, id){
            let body = {};
            try {
                body = JSON.parse(this.body);

                this.result = `Sent to AMQ.`;
                
                let res = await store.send_to_amq(this.url, this.auth, body);

                this.result = JSON.stringify(res.json);
            } catch (err){
                this.result = err.message;
            }
        },
        async sqs(evt, id){
            let body = {};
            try {
                body = JSON.parse(this.body);

                this.result = `Sent to SQS.`;
                
                let res = await store.send_to_mqtt(this.url, this.auth, body);

                this.result = JSON.stringify(res.json);
            } catch (err){
                this.result = err.message;
            }
        }
    },
    template: `
        <div class="container col-xl-10 col-xxl-8 px-4 py-lg-5 py-1">
            <div class="row align-items-start g-lg-5 py-lg-5 py-1">
                <div class="col-lg-7 text-center text-lg-start">
                    <div class="col-lg-7 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Virtual Endpoints UI</h1>
                    </div>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                    <div class="d-flex flex-column mb-3">
                        <label for="url">Cloudface URL</label>
                        <input v-model="url" type="text" class="form-control" id="url" placeholder="https://api.{{env}}.anthropos.io/cloudface/tests/send_to_sqs">    
                    </div>
                    <div class="d-flex flex-column mb-3">
                        <label for="auth">Cloudface AUTH</label>
                        <input v-model="auth" type="text" class="form-control" id="auth" placeholder="Basic b2lVYnJRVTVST2NnUszfdszaswnczRUOXI3SE05U01kSGdjZWE=">    
                    </div>
                    <div class="d-flex flex-column mb-3">
                        <label for="body">Cloudface URL</label>
                        <input v-model="body" type="text" class="form-control" id="body" placeholder="{&quot;json&quot;:&quot;some data&quot;}">    
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5">
                        <button @click="(event)=>amq()" type="button" class="w-100 btn btn-lg btn-primary m-1">AMQ Test &gt;</button>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5">
                        <button @click="(event)=>sqs()" type="button" class="w-100 btn btn-lg btn-primary m-1">SQS Test &gt;</button>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5 border">
                        <p class="overflow-hidden break-all" style="overflow-wrap:anywhere">{{result}}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}