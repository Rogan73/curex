<template>
  <div class="selCur" @click="toogleItems"  eldrop>
        <span eldrop >{{value}}</span>
        <svg eldrop class="icn" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   
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


export default {
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
    border: 1px solid rgb(226, 226, 226);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    width: 80px;
    position: relative;
    
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