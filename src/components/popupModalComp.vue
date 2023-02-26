<template>
    <div 
    class="modalWrapper" 
    :class="{open: SideBar}"
    @click.self="setSideBar(false)"> 
      <div 
      class="sidebar"
      :class="{open: SideBar}"
      >

      <div class="btn_close" @click="setSideBar(false)"><closeIcon class="cls"/></div> 

        <div class="title">Додати валюту</div>
        <div class="search">
          <span class="mr-10 stxt">Пошук</span>
          <input class="inp summa upper" type="text" :value="listOtherAllFF" @input="setlistOtherAllFF($event.target.value)">
        </div>

        <div class="listItems">
        
         <div 
         v-for="item,i in listOtherAllFilter"
         :key="i"
         class="item"
         @click="AddlistOther(item)"
         >
           <div class="dflex3" v-if="item">
            <img class="icnC" :src="'/curex/assets/icons/'+item+'.png'" :alt="item">
            <span> {{ item }}</span>
           </div> 
         </div>
        
        </div>
        
    </div>
    </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import closeIcon from './icons/closeIcon.vue'
export default {
 components:{
    closeIcon
 },   
 data: ()=> ({
  isOpen:false
 }),
 computed:{
   ...mapGetters(['SideBar','listOtherAllFF','listOtherAllFilter'])
 },
 methods:{
    ...mapMutations(['setSideBar','AddlistOther','setlistOtherAllFF']),
    openDialog(){
      this.isOpen=true
    },    
    closeDialog(){
      this.isOpen=false
    }
    
 }

}

</script>

<style scoped lang="scss">

.modalWrapper{
    position: unset;
    left: 0;
    top: 0;
    right: -105%;
    /*bottom: 0;*/
    background-color: rgba(0, 0, 0, 0.589);
    z-index: 2000;
    transition: all 0.3s ease;
    opacity: 0;

}

.sidebar{
    position: unset;
    top: 2vh;
    /*bottom: 0;*/
    background-color: var(--bgSb);
    border-top-left-radius: var(--bordRad30);
    border-bottom-left-radius: var(--bordRad30);
    height: 96vh;
    width: 80vw;
    right: -105%;
    opacity: 0;
    position: absolute;
    transition: all 0.3s ease;
    z-index: 3000;
    box-shadow: -5px 0px 84px 0px #000000c9;
    max-width: 300px;
}

.open{
    position:fixed;
    right: 0;
    opacity: 1;
}

.search{
    margin: 50px 10px;
}

.btn_close{
   position: absolute; 
   right: 10px;
   top: 10px;
   background-color: var(--bgBut);
   color: var(--colBut);
   width: 20px;
   padding: 8px 8px 5px 8px;
   border-radius: var(--bordRad50p);
   cursor: pointer;
   transition: all 0.3s ease;
   &:hover{
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.285);
   }
}

.cls{
    opacity: 0.65;
    fill: var(--colBut);
}

.title{
    width: 100%;
    margin-top: 20px;
    /*font-weight: bold;*/
    color: var(--colButSb);
}

.stxt{
    color: var(--colButSb);
}

.listItems{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item{
    width: -webkit-fill-available;
    max-width: 50%;
    padding: 10px 20px;
    border-radius: var(--bordRad50);
    box-shadow: 0 0 10px 0 #0000002a;
    margin: 5px 0;
    transition: all 0.3s ease;
    display: block;
    color: var(--colButSb);
    background-color: var(--bgButSb);
    &:hover{
        background-color: var(--bgButH);
        color: var(--colButH);
    }
}

.icnC{
  width: 20px;
  padding: 0 4px;
}

</style>