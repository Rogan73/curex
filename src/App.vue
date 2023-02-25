<template>
    <popupModalComp/>
    <headerComp/>
    <div class="main">
      <mainComp/>
      <listComp/>
     </div>
    <keyboardComp/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import popupModalComp from './components/popupModalComp.vue';
import headerComp from './components/headerComp.vue';
import mainComp from './components/main/mainComp.vue';
import listComp from './components/listComp.vue';
import keyboardComp from './components/keyboardComp.vue';
//import { mapActions } from 'vuex'
import  store from './store'


export default defineComponent({
  name: 'App',
  components: {
    popupModalComp,
    headerComp,
    mainComp,
    listComp,
    keyboardComp,
  },
  created() {
    store.dispatch('fetchCurrencies');
  }  


});


</script>

<style lang="scss">
.main{
  background-color: var(--bgMain);
  padding: 10px 10px;
}
</style>
