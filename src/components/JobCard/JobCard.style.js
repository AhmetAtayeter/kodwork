import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 10,
        padding: 5
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    view1: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#ee534f',
        alignSelf: 'flex-start',
        backgroundColor: '#ee534f',
    },
    text2: {
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
    },
    text3: {
        color: '#ee534f',
        fontWeight: 'bold',
        textAlign: 'right'
    }
})