export default {
    formatCur(payload:number){
        let v= payload.toFixed(7);
            v = v.replace(/0*$/,"");
            v = v.indexOf('.')==v.length-2 ? v+'0' : v;
            v = v.indexOf('.')==v.length-1 ? v+'00' : v;
        return v;
    },
    
}

