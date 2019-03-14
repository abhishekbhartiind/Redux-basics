export const ADD_CHARACTER = "ADD_CHARACTER";

export function addCharterById(id){
    // create actions..action creator returns actions
    const action ={
        type: ADD_CHARACTER,
        id
    }
    return action
}