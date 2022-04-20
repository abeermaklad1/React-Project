export default function TodosReducer(state = [], action){
    if(action.type == 'TODOS-List') return action.payload;

    return state;
}