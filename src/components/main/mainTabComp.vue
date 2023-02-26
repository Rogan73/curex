<template>
    <div class="toogleBuySell hidden">
       <div 
       class="tab" 
       :class="{active: activeTab==0}"
       @click.self="setTab(0)"
       >Купівля</div>
       <div 
       class="tab" 
       :class="{active: activeTab==1}"
       @click.self="setTab(1)"    
       >Продаж</div>

    </div>
</template>

<script >
import { mapGetters, mapMutations } from 'vuex'

export default {
    data: () => ({
  }),
  computed: {
    ...mapGetters(['activeTab'])
  },
  mounted(){
   this.setTab(this.activeTab)
  },
  methods: {
    ...mapMutations(['setTab'])
  }
}

</script>

<style scoped lang="scss">

 .toogleBuySell{
   display: flex;
   justify-content: space-around;
   background-color: lightgray;
   border-radius: var(--bordRad20);
   
 }

.tab{
    padding: 5px;
    background-color: var(--bgTab) ;
    margin: 4px;
    border-radius: var(--bordRad20);
    cursor: pointer;
    font-weight: bold;
    width: -webkit-fill-available;
    color: var(--colTab);
    &:hover{
        background-color: var(--bgTabAct);
    }
    
}
 .active{
    background-color: var(--bgTabAct);
    color: var(--colTabAct);
 }
</style>