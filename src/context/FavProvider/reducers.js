import AsyncStorage from "@react-native-async-storage/async-storage"

export default function reducers(state,action){
    switch (action.type) {
        case "SET_FAV":
            const favorites  = action.payload
            console.log(favorites)
            AsyncStorage.setItem('@FAVORITES', JSON.stringify(favorites))
            return { ...state,favorites }
    
        default:
            return state
    }
}