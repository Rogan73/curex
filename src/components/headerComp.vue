<template>
    <header class="rel">
    <div class="theme_btns">
       <div class="th_btn " @click="setcurTheme('theme-dark')"> <circleIcon class="dark icT"/></div>
       <div class="th_btn " @click="setcurTheme('theme-violet')"><circleIcon class="violet icT"/></div>
       <div class="th_btn " @click="setcurTheme('theme-green')" ><circleIcon class="green icT"/></div>
    </div>
       <div 
       class="btn_update" 
       title="Оновлення даних"
       @click="fetchCurrencies"
       >
          <updateIcon class="updIcn"/>
       </div>
        <span class="htxt">Конвертер валют</span>
    </header>
</template>

<script>
import updateIcon from './icons/updateIcon.vue';
import circleIcon from './icons/circleIcon.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex'


export default {
    components:{
        updateIcon,
        circleIcon  
    },
    computed:{
      ...mapGetters(['curTheme'])
    },
    methods:{
        ...mapActions(['fetchCurrencies']),
        ...mapMutations(['setcurTheme'])
    }


}

</script>

<style scoped lang="scss">

.htxt{
    font-size: 16px;
}

.theme_btns{
    position: absolute;
    display: flex;
    margin-left: 10px;
}
.th_btn{
     cursor: pointer;
     padding: 0px 5px;
     box-shadow: 0 0 5px 0 rgba(44, 44, 44, 0.719), inset 0 0 5px 0 rgba(17, 17, 17, 0.776);
     border-radius: var(--bordRad50p);
     margin: 0 2px;
     transition: all 0.3s ease;
     &:hover{
        box-shadow: 0 0 8px 0px rgba(28, 28, 28, 0.994), inset 0 0 5px 0 rgba(17, 17, 17, 0.776);
     }
     &:active{
        box-shadow: 0 0 0px 0 black, inset 0 0 8px 0 rgb(0, 0, 0); 
     }
}

.dark{
  fill: darkgray;
}

.violet{
    fill: violet;
}

.green{
    fill: green;
}

.icT{
    width: 14px;
}

.updIcn{
  width: 24px;
  margin-top: 4px;
  fill: var(--bgBut)
}

.btn_update{
    position: absolute;
    right: 7px;
    top: -4px;
    padding: 0px 5px 0px 5px;
    border-radius: var(--bordRad50p);
    background-color: var(--bgButInv);
    color: var(--bgBut);
    transition: all 0.3s ease;
    
    cursor: pointer;
    &:hover{
        background-color: var(--colBut);
       /* color: var(--colBut);*/
        
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.285);
    }
    
}
.rel{
    position: relative;
    color: var(--colBut);
}
</style>