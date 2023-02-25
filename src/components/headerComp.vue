<template>
    <header class="rel">
       <div 
       class="btn_update" 
       title="Оновлення даних"
       @click="fetchCurrencies"
       >
          <updateIcon class="updIcn"/>
       </div>
        <span>Конвертер валют</span>
    </header>
</template>

<script>
import updateIcon from './icons/updateIcon.vue';
import { mapActions } from 'vuex'

export default {
    components:{
        updateIcon  
    },
    methods:{
        ...mapActions(['fetchCurrencies'])
    }

}

</script>

<style scoped lang="scss">
.updIcn{
  width: 24px;
  opacity: 0.7
}

.btn_update{
    position: absolute;
    right: 16px;
    top: -4px;
    padding: 2px 5px;
    border-radius: 50%;
    background-color: var(--colBut);
    color: var(--bgBut);
    transition: all 0.3s ease;
    
    cursor: pointer;
    &:hover{
        background-color: var(--drHov);
        color: var(--colBut);
        
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.285);
    }
    
}
.rel{
    position: relative;
}
</style>