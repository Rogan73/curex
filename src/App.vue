<template>
    <!-- <div class="theme-green app_main"> -->
    <div class="app_main"
    :class=" {vis: vis}"
    >
    
    <popupModalComp/>
    <headerComp/>
    <div class="main">
      <mainComp/>
      <listComp/>
     </div>
    <footerComp/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import popupModalComp from './components/popupModalComp.vue';
import headerComp from './components/headerComp.vue';
import mainComp from './components/main/mainComp.vue';
import listComp from './components/listComp.vue';
import footerComp from './components/footerComp.vue';
import  store from './store'


export default defineComponent({
  name: 'App',
  components: {
    popupModalComp,
    headerComp,
    mainComp,
    listComp,
    footerComp,
  },
  data: () => ({
    vis:false
  }),
  created() {
    store.dispatch('fetchCurrencies');
  },
  mounted(){
    document.title = 'Конвертер валют';
    this.addListDoc();
    
    setTimeout( ()=>{this.vis=true},200);
  },
  methods:{

    addListDoc(){
      document.addEventListener("click", (elm) => {
      const el=(elm.target as HTMLElement);

        if (!el.hasAttribute('eldrop')){
           const arr_dr  = document.querySelectorAll('.dropdown');
           arr_dr.forEach( e => {
              if (!e.classList.contains('hidden') ){   
                   e.classList.add('hidden');
              }
           });
        }
        });
    },


  }  


});


</script>

<style lang="scss">
.main{
  background-color: var(--bgMain);
  padding: 10px 10px;
}


</style>


