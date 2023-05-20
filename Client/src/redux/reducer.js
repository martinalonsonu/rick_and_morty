import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };

        case REMOVE_FAV:
            return {
                myFavorites: action.payload,
                allCharacters: action.payload,
            }

        case FILTER:
            const allCharsFilter = state.allCharacters.filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites:
                    action.payload === "All"
                        ? state.allCharacters
                        : allCharsFilter
            }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}


export default reducer;