import character_json from '../data/character.json';
import {ADD_CHARACTER} from '../actions';

function createCharacter(id){
    let character = character_json.find(
        c => c.id === id
    )
    return character
}

function heroes(state = [], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)]
            return heroes
        default:
            return state
    }
}

export default heroes;