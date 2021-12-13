import { createStore } from "redux";

const initialState = {
    regularId: -1,
    name:"Danbo"
};

const idReducer = (state = initialState, action) => {
    if (action.type === "CHANGE_ID") {
        console.log(action.payload)

        return {
            regularId: action.payload.userId,
            name: action.payload.firstName
        };
    }

    if (action.type === "EMPTY_ID") {
        return {
            regularId: -1,
            name:"None"
        };
    }

    return state;
};

const store = createStore(idReducer)

export default store