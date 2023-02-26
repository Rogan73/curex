/* eslint-disable @typescript-eslint/no-explicit-any */

interface Mainstore {
    activeTab: number,
    SideBar: boolean,
    curTheme: string
}

export default {

    state: {
      activeTab: 0,
      SideBar:false,
      curTheme:'theme' 
    },
    getters: {
        activeTab(state: Mainstore):number {
            return state.activeTab;
        },

        SideBar(state: Mainstore):boolean {
            return state.SideBar;
        },

        curTheme(state: Mainstore):string {
            return localStorage.cc_curTheme || state.curTheme ;
        },



    },
    mutations: {

        setcurTheme(state: Mainstore, payload: string){
            state.curTheme = payload; 
            localStorage.cc_curTheme=payload;
            const body = document.querySelector('body');
            body?.classList.remove('theme-dark');
            body?.classList.remove('theme-green');
            body?.classList.remove('theme-violet');
            body?.classList.add(payload); 
        },

        LoadTheme(state: Mainstore){
            const theme = localStorage.cc_curTheme || state.curTheme;
            const body = document.querySelector('body');
            body?.classList.add(theme); 
         },        

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