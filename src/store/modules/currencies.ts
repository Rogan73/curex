/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import helper from './helper'

interface itemOther{
   title: string,
   value : number
}

interface Currencyes {
    currencies: Array<string>,
    curFrom: string,
    curTo: string,
    curBase: string,
    fullList: any,
    amountFrom: number,
    amountTo: number,
    listBase: Array<string>,
    listOther: Array<string>,
    listOtherAll: Array<string>,
    listOtherAllFF:string,
    timeUpdate: number,
    maxTimeUpdate:number,
    timerUpdate: any,
}


export default {

    state: {
        currencies: [],
        curFrom: 'USD',
        curTo: 'BTC',
        curBase: 'USD',
        fullList:{},
        amountFrom: 1,
        amountTo: 1,
        listBase: ["USD", "EUR", "UAH"],
        listOther: ["USD", "EUR", "UAH", "BTC", "ETH"],
        listOtherAll: ["USD", "EUR", "UAH", "BTC", "ETH"],
        listOtherAllFF: "",
        timeUpdate: 0,
        maxTimeUpdate: 5,
        timerUpdate: null,
    },

    getters: {
        timeUpdate(state: Currencyes):number{
            return state.timeUpdate;
        },

        currencies(state: Currencyes):Array<string> {
            return state.currencies;
        },

        listOtherAll(state: Currencyes):Array<string> {
            return state.listOtherAll;
        },

        listOtherAllFF(state: Currencyes):string {
            return state.listOtherAllFF;
        },

        listOtherAllFilter(state: Currencyes):Array<string> {
           return state.listOtherAllFF==="" ? 
             state.listOtherAll : 
             state.listOtherAll.filter( el => { return el.includes(state.listOtherAllFF) });
        },        

        curFrom(state: Currencyes):string {
            return state.curFrom;
        },
        curTo(state: Currencyes):string {
            return state.curTo;
        },   
        curBase(state: Currencyes):string {
            return state.curBase;
        },   
        listBase(state: Currencyes):Array<string> {
            return state.listBase;
        },   

        listOther(state: Currencyes):Array<itemOther> {

        if (Object.keys(state.fullList).length>0 && state.curBase ) {
            const base = state.curBase;
            let curs : number;
            const resArr = state.listOther.map( (el:string) => {
                if (base!=el){
                 curs  =  state.fullList[base][el];
                 return {title: el, value:curs}
                }else{
                  return {title: "", value:0} ;
                }
            })
            const resArr2 = resArr.filter( el => { return el.title!="" })
            
            return resArr2;
        } else { 
            return [{title: "", value:0}] ;
        }   

        },   



        amountFrom(state: Currencyes):number {
            return state.amountFrom;
        },         
        amountTo(state: Currencyes):string {
            let s = "0";
            if (Object.keys(state.fullList).length>0 && state.curFrom && state.curTo && state.amountFrom ){
               s = helper.formatCur( state.fullList[state.curFrom][state.curTo] * state.amountFrom ) 
            }
            return s;
        },   
        getCurs(state: Currencyes):number{
            let n = 0;
            if (state.curFrom && state.curTo && Object.keys(state.fullList).length > 0){
             n =  state.fullList[state.curFrom][state.curTo];
            }
            return n;
        }

    },

    mutations: {
        setCurrencies(state: Currencyes, data: Array<string>) {
            state.currencies = data
        },
        setlistOtherAll(state: Currencyes, data: Array<string>) {
            state.listOtherAll = data
        },

        // curFrom
        setCurFrom(state: Currencyes, data: string){
            state.curFrom=data ;
            localStorage.curFrom = state.curFrom;
        },
        LoadCurFrom(state: Currencyes ){
            if (localStorage.curFrom)  state.curFrom = localStorage.curFrom ;
        },

         // curTo
        setCurTo(state: Currencyes, data: string){
            state.curTo=data ;
            localStorage.curTo = state.curTo;
        },
        LoadCurTo(state: Currencyes ){
            if (localStorage.curTo)  state.curTo= localStorage.curTo ;
        },

        // CurBase
        setCurBase(state: Currencyes, data: string){
            state.curBase=data ;
            localStorage.curBase = state.curBase;
        },

        LoadCurBase(state: Currencyes ){
            if (localStorage.curBase)  state.curBase= localStorage.curBase ;
        },

      
        // listOther
        LoadlistOther(state: Currencyes ){
            if (localStorage.listOther)  state.listOther= JSON.parse(localStorage.listOther) ;
        },

        AddlistOther(state: Currencyes,value:string){
             const found:any = state.listOther.find(element => element === value);
            if ( found==undefined && value!=state.curBase ){
            state.listOther.push(value);
            localStorage.listOther = JSON.stringify(state.listOther);      
            }

        },

        setlistOtherAllFF(state: Currencyes,value:string){
            state.listOtherAllFF=value.toUpperCase();
        },

        DellistOther(state: Currencyes,value:string){
            state.listOther = state.listOther.filter( v=> {return value!=v})
            localStorage.listOther = JSON.stringify(state.listOther); 
        },

        setCurses(state: Currencyes, data: any){
            state.fullList = data; 
        },
        setAmountFrom(state: Currencyes, payload:number){
            payload>0? state.amountFrom = payload: null
        },

        setTimeUpdate(state: Currencyes){
           state.timeUpdate ++;
        },

        StatrtTimeUpdate(state: Currencyes){
          state.timerUpdate = setInterval( ()=>{
              state.timeUpdate ++;
              if (state.timeUpdate>state.maxTimeUpdate){
                clearInterval(state.timerUpdate);
                state.timeUpdate=0;
              } 
            },1000);  
         },


    },

    actions: {


        // load from LocalStorage  
        LoadLocal(context: any){
            context.commit('LoadCurFrom'); 
            context.commit('LoadCurTo'); 
            context.commit('LoadlistOther'); 
            context.commit('LoadCurBase'); 
        },        

        async fetchCurrencies(context: any) {
          if (context.getters.timeUpdate>0){
              return;
          }  

          try {
          const res = await axios.get('/curex/assets/cur.json');
          const res2 = await axios.get('/curex/assets/cur2.json');
               context.dispatch('LoadLocal');
               context.commit('setCurrencies', res.data);
               context.commit('setlistOtherAll', res2.data);
               context.dispatch('LoadCurses',context);

               context.commit('StatrtTimeUpdate');
               
               } catch (error) {
                    console.log('error', error)
               }
        },

        LoadCurses(context: any) {
            const list = context.getters.currencies.toString();  
            axios.get('/api/data/pricemulti?fsyms='+list+'&tsyms='+list)
            .then((res) => {
                context.commit('setCurses', res.data)
            })
            .catch(err => {
                console.log('error', err)
            })

        },


       

        



    }
}