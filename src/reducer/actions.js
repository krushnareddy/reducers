//declare all the actions in this file


//define action generater

export function addCourse(course){
    return{
        type:"ADD_COURSE",
        course
    }
}

export function removeCourse(index){
    //action is just a javascript object
    return{
        type:"REMOVE_COURSE",
        index
    }
}