export default {
    formatCur(payload:number){
        return Math.trunc(payload)==0 ? payload.toFixed(7) : payload.toFixed(2);
    },

}

