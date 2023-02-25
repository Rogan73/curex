<template>

    <!-- FROM -->
    <div class="card  ">
      
      <dropdown  
      id="dr01"
      :value="curFrom" 
      :itemlist="currencies"  
      @selected="setCurFrom" 
      title="Валюта, яку міняємо"
      />

      <input 
      class="inp summa" 
      type="number" 
      :value="amountFrom" 
      @input="setAmountFrom($event.target.value)"
      title="Кількість, яку хочемо поміняти"
      min="1"
      >

    </div>

    <div class="wr" >
       <div 
       class="btn_change" 
       title="Поміняти валюти місцями"
       @click="swapCurr"
       > 
          <swapIcon class="sw"/> 
        </div>
    </div>

    <!-- TO -->
    <div class="card">
      
      <div class="dflex2">
        
        <dropdown  
        id="dr02"
        class="mr-10"
        :value="curTo" 
        :itemlist="currencies"  
        @selected="setCurTo" 
        title="Валюта, на яку міняємо" 
        />

        <span  title="Курс валюти">{{cursTo}}</span>

      </div>
      <span class="summa" title="Вартість"> {{amountTo}}</span>
    </div>


</template>

<script>
import dropdown from "../dropdownComp.vue"
import swapIcon from "../icons/swapIcon.vue"
import { mapGetters,mapMutations } from 'vuex'

export default {
    components:{
        dropdown,
        swapIcon 
    },
    computed:{ 
      ...mapGetters([
        'curFrom',
        'curTo',
        'amountFrom',
        'amountTo',
        'getCurs',
        'currencies',
      ]),
      cursTo(){
        return this.getCurs;
      }

    },
    methods :{
      ...mapMutations(['setAmountFrom','setCurFrom','setCurTo','swapCurr'])
    }


}

</script>

<style scoped lang="scss">
 .wr{
   position: relative;
 }

 .btn_change{
   position: absolute;
   left: 45%;
   top: -24px;
   width: 30px;
   background-color: var(--bgMain);
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.1);
   padding: 5px 7px 2px 7px;
   cursor: pointer;
   transition: all 0.3s ease;
   &:hover{
     background-color: var(--colBut);
     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.285);
   }
 }

 .sw{
  fill: var(--bgBut)
 }


</style>

