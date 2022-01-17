//Library to save the data of cart 
import createPersistedState from "vuex-persistedstate";

export default ({store}) => {
    window.onNuxtReady(() => {
        createPersistedState({})(store);
    });
};