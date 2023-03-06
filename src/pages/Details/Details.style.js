import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        margin: 5
    },
    view1: {
        flexDirection: 'row',
        margin: 5
    },
    view2: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text1: {
        color: '#36474f',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2: {
        color: '#ee534f',
        fontWeight: 'bold',
        fontSize: 18
    },
    text3: {
        fontWeight: 'bold',
        fontSize: 18
    },
    text4: {
        textAlign: 'center',
        color: '#36474f',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10
    },
    html: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 5
    },
    button1: {
        backgroundColor: '#ee534f',
        width: 160,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ee534f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    text5: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5
    }
})