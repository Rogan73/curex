<template>
    <footer class="footer">
        <!-- <updtimeIcon/> -->
        <updtimeIcon class="upI"></updtimeIcon>
        <span>Останне оновлення: {{ TimeLastUpdate }}</span>
    </footer>
</template>
<script>
import { mapGetters } from 'vuex';
import updtimeIcon from './icons/updtimeIcon.vue';

export default {
 components:{
    updtimeIcon
 },   
 computed:{
    ...mapGetters(['TimeLastUpdate'])
 }
}

</script>

<style scoped lang="scss">
.footer{
    margin-top: 6px;
    display: flex;
    color: var(--colBut);
    justify-content: center;
    align-items: center;  
    font-size: 12px;  
}

.upI{
    width: 20px;
    fill: var(--colBut);
    margin-right: 5px;
    opacity: 0.8;
}

</style>