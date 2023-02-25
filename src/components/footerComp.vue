<template>
    <footer class="footer">
        <span>Останне оновлення: {{ TimeLastUpdate }}</span>
    </footer>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
 computed:{
    ...mapGetters(['TimeLastUpdate'])
 }
}

</script>

<style scoped lang="scss">
.footer{
    margin-top: 10px;
    display: flex;
    color: var(--colBut);
    justify-content: center;
    align-items: center;  
    font-size: 12px;  
}

</style>