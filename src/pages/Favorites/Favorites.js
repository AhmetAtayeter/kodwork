import React, { useEffect } from "react";
import { SafeAreaView,Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

//AsyncStorage.getItem('@FAVORITES', favorites)

const Favorites = async () => {

    //const dispatch = useDispatch()
    useEffect(() => {
        //const  {favorites} = useSelector(s => s.favorites)
        const favs = () => dispatch({type: 'SET_FAV'})
        if (favs !== null) {
            console.log("favs")
            console.log(favs)
        }
    }, [])
    
    //const  {favorites} = useSelector(s => s.favorites)
    // console.log(favorites)
    return(
        <SafeAreaView>
            <Text>
                {/* {favorites} */}
            </Text>
        </SafeAreaView>
    )
}

export default Favorites