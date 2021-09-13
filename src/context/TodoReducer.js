const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_NOTE':
            if(action.id || action.id===0){
                let lst = state.map((item, ind)=>{
                    if(ind===action.id){
                        return action.payload;
                    }else{
                        return item;
                    }
                }
                );
                localStorage.setItem('list', JSON.stringify(lst));
                return lst;
            }else{
                let lst = [...state, action.payload];
                localStorage.setItem('list', JSON.stringify(lst));
                return lst;
            }
        case 'DEL_NOTE':
            let lst = state.filter((item, ind)=>{
                return ind!==action.payload;
            })
            localStorage.setItem('list', JSON.stringify(lst));
            return lst;
        case 'EDIT_NOTE':
            return state;
        case 'DEL_ALL':
            localStorage.setItem('list', JSON.stringify([]));
            return [];
        case 'LOCAL_STORAGE':
            return JSON.parse(localStorage.getItem('list'));
        default: 
            return state;
    }
}





export default reducer;
