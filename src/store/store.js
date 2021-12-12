import { createStore } from "redux";

const initialState = {
    regularId: ''
}

const idReducer = (state = initialState, action={type:'', payload:''}) => {
    if (action.type === "CHANGE_ID") {
        return {
            regularId: action.payload
        }
    }

    if (action.type === "EMPTY_ID") {
        return {
            regularId: ''
        }
    }

    return state
}

const store = createStore(idReducer)

export default store