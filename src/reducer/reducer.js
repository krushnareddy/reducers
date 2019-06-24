import courses from '../data/courses';

let rootReducer = function(currentState = courses, action){
    console.log('came inside the root reducer with action ')
    console.log(action);
    switch(action.type){
        case 'REMOVE_COURSE':
                return removeCourseFromArray(action.index, currentState);
        case 'ADD_COURSE':
                return addCourseArray(currentState,action.course);
        default:
            return currentState        
    }
}

function removeCourseFromArray(index, state){
    
    return state.filter(state => state.id !== index)
    //state.slice(0, index).concat(state.slice(index + 1, state.length))
    //[...state.splice(0,index),...state.splice(index + 1)];
}
 function addCourseArray(currentState,course){
    console.log([...currentState,course])
    return [...currentState,course]
    
 }



export default rootReducer;