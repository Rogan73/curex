<template>
    <div class="card2">
       
       <div class="row_r">
           <div class="pan1">
              <span class="tbv">Базова валюта</span> 
              <dropdown 
              id="dr03"
              class="ml-10" 
              :value="curBase" 
              :itemlist="listBase"  
              @selected="setCurBase" />
           </div>
           <div class="add_btn" @click="openDialog" title="Додати валюту">+</div>

       </div>
     
       <div class="listOther">
          <div 
          class="item" 
          v-for="item,i in listOther"
          :key="i"
          >
              <div class="dflex3">
                  <img class="icnC" :src="'/curex/assets/icons/'+item.title+'.png'" :alt="item.title">   
                  <span>{{ item.title }} </span>
              </div>  
            
            <div class="vb" >
                 <span>{{ item.value }} </span>
                 <trashIcon 
                 class="tr" 
                 @click="DellistOther(item.title)" 
                 title="Видалити"
                 />
             </div>

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
    max-width: 70%;
    padding: 10px 30px;
    border-radius: var(--bordRad50);
    transition: all 0.3s ease;
    color: var(--colItem);
    &:hover{
        background-color: var(--bgButH);
        color: var(--colButH);
       
    }    

}

.tr{
  width: 15px;
  opacity: 0.5;
  margin-left: 20px;
  border-radius: var(--bordRad50p);
  &:hover{
    fill: var(--colBut);
  }
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
    border-radius: var(--bordRad20);
    background-image: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
}


.add_btn {
    background-color: var(--bgBut);
    color: var(--colBut);
    padding: 2px 10px;
    border-radius: var(--bordRad50p);
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    margin: 5px 10px;
    transition: all 0.3s ease;
    &:hover{
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.285);
    }
}

.tbv{
  color: var(--colBut);
}
</style>