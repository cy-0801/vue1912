import Vue from "vue"
import Vuex from "vuex"

import goods from "./goods"

import user from "./user"

Vue.use(Vuex);
 
export default new Vuex.Store({
    modules:{

        goods,
        user
    }

})


