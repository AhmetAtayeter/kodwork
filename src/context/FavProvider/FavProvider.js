import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";


const FavProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])
    const [isFavsLoading, setFavsLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('@FAVORITES').then(favoritesSession => {
            console.log("fav")
            console.log(favorites)
            favoritesSession && setFavorites(favorites => [...favorites, JSON.parse(favoritesSession)])
            setFavsLoading(false)
            console.log(favorites)
        }).catch(error => console.log(error))
    
    },[])

    const store = createStore(reducers, { favorites,isFavsLoading })
    return <Provider store={store} >{children}</Provider>
}

export default FavProvider