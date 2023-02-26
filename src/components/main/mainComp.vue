<template>
   <main>
     <TabComp />
     <Convert/>
   </main>
</template>

<script lang="ts">

import TabComp from './mainTabComp.vue'
import Convert from './mainConvert.vue'

export default {
    components: {
        TabComp,
        Convert
    }
 }

</script>

