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
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }

    case REMOVE_FAV:
      const filterCharacter = state.myFavorites.filter((character) => character.id !== Number(action.payload))
      const filterAllCharacter = state.allCharacters.filter((character) => character.id !== Number(action.payload))
      return {
        myFavorites: filterCharacter,
        allCharacters: filterAllCharacter
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