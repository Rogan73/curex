<template>
    <div class="card2">
       
       <div class="row_r">
           <div class="pan1">
              <span>Базова валюта</span> 
              <dropdown class="ml-10" :value="curBase" :itemlist="listBase"  @selected="setCurBase" />
           </div>
           <div class="add_btn" @click="openDialog" title="Додати валюту">+</div>

       </div>
     
       <div class="listOther">
          <div 
          class="item" 
          v-for="item,i in listOther"
          :key="i"
          >
            <div class="vb" >
                <trashIcon 
                 class="tr" 
                 @click="DellistOther(item.title)" 
                 title="Видалити"
                 />
               <span>{{ item.title }} </span> 
            </div>
            <span>{{ item.value }} </span>
          
          </div>
       </div>


    </div>
</template>

<script >
import dropdown from "./dropdownComp.vue"
import { mapGetters,mapMutations } from 'vuex'
import trashIcon from './icons/trashIcon.vue'

export default {
  components:{
    dropdown,
    trashIcon,
  },
  data: () => ({
    listSel: [],
    listDef: [] 
  }),
  computed:{
     ...mapGetters(['curBase','listBase','listOther'])
  },
  methods:{
    ...mapMutations(['setCurBase','DellistOther','setSideBar']),
    openDialog(){
       this.setSideBar(true);
    }
  }

}


</script>

<style scoped lang="scss">
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
    max-width: 50%;
    padding: 10px 20px;
    border-radius: 50px;
    transition: all 0.3s ease;
    &:hover{
        background-color: var(--bgBut);
        color: var(--colBut);
       
    }    

}

.tr{
  width: 15px;
  opacity: 0.5;
  padding-right: 8px;
}
.vb{
  display: flex;
  align-items: center;
}

.pan1{
  display: flex;
  align-items: center;
  margin: 6px 20px;
}


.row_r {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bgTab);
    margin: 4px;
    border-radius: 20px;
}


.add_btn {
    background-color: var(--bgBut);
    color: var(--colBut);
    padding: 2px 10px;
    border-radius: 50%;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    margin: 5px 10px;
    transition: all 0.3s ease;
    &:hover{
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.285);
    }
}
</style>