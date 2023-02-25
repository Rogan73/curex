<template>
  <div class="selCur" @click="toogleItems"  eldrop>
        <span eldrop >{{value}}</span>
        <downIcon2/>
    <div 
    class="dropdown" 
    :class="{hidden: !isOpen}"
    >
    <span
    class="item"
    v-for="item, i in itemlist"
    :key="i"
    @click="$emit('selected',item)"
    >
   
    {{ item }}
    </span>

    </div>

  </div>

</template>

<script >
import downIcon2 from './icons/downIcon2.vue';

export default {
  components:{
    downIcon2
  },
  props: {
    value: String,
    itemlist: Array
  },
  data: ()=>({
    isOpen:false
  }),
  methods:{
    toogleItems(){
       this.isOpen=!this.isOpen;
    }
  }

}

</script>

<style  lang="scss">
.selCur{
    font-size: 16px;
    color: var(--colCur);
    cursor: pointer;
    padding: 5px 10px;
    /*border: 1px solid rgb(226, 226, 226);*/
    border: 2px solid rgba(0, 0, 0, .1);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    width: 80px;
    position: relative;
    margin-bottom: 5px;
    
}

.dropdown{
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(239, 239, 239);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 20px 0px #00000038;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 100;
    background-color: var(--bgDr);
   
}
.item{
     padding: 8px 5px;
     cursor: pointer;
     width: 80px;
     transition: all 0.3s ease;
    &:hover{
    background-color: var(--bgBut);
    color: var(--colBut);
   }
}

.icn{
    width: 20px;
    margin-left: 5px;
}

</style>