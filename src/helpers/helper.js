
function filteredAccepted(arr,filters){
    let filtered_accepted=true;
    for(let i=0;i<filters.length;i++){
        if(!arr.includes(filters[i])) filtered_accepted=false;
    }
    return filtered_accepted;
}
export {filteredAccepted};