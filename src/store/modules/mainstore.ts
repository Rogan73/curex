/* eslint-disable @typescript-eslint/no-explicit-any */

interface Mainstore {
    activeTab: number,
    SideBar: boolean,
}

export default {

    state: {
      activeTab: 0,
      SideBar:false,

    },
    getters: {
        activeTab(state: Mainstore) {
            return state.activeTab;
        },

        SideBar(state: Mainstore) {
            return state.SideBar;
        },



    },
    mutations: {
        setTab(state: Mainstore, payload: number){
            state.activeTab = payload; 
        },

        setSideBar(state: Mainstore,payload: boolean){
            state.SideBar=payload
        },

    },
    actions: {


    },
    modules: {
    }

}