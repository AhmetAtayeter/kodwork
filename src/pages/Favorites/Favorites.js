import React from "react";
import { SafeAreaView,Text, ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux";
import styles from "./Favorites.style"

const Favorites = () => {
    
    const  favorites = useSelector(s => s.favorites)
    const loading = useSelector(s => s.isFavsLoading)
    // console.log(loading)
    console.log(favorites)

    const renderFavorites = ({item}) => <Text>{item.company.name}</Text>

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data= {favorites}
                renderItem={renderFavorites}
                // key={favorites.company.id}
                />
        </SafeAreaView>
    )
}

export default Favorites