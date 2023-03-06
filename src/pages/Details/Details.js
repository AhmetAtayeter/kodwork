import React , { useEffect }from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import styles from './Details.style'
import RenderHTML from "react-native-render-html";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';



const Details = ({ route,navigation }) => {
    
    const { job } = route.params
    const width = Dimensions.get('window').width
    const source = { html: job.contents }
    console.log(job.contents)

    useEffect(()=>{
        navigation.setOptions({ title: job.categories[0].name})
    },[])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text1}>{job.categories[0].name}</Text>
            <View style={styles.view1}>
                <Text style={styles.text2}>Locations:</Text>
                <Text style={styles.text3}>{job.locations[0].name}</Text>
            </View>
            <View style={styles.view1}>
                <Text style={styles.text2}>Job Level:</Text>
                <Text style={styles.text3}>{job.levels[0].name}</Text>
            </View>
            <Text style={styles.text4}>Job Detail</Text>
            <View style={styles.html}>
                <RenderHTML
                    contentWidth={width}
                    source={source}
                />
            </View>
            <View style={styles.view2}>
                <TouchableOpacity style={styles.button1}>
                    <Icon name="login" size={30} color="white" />
                    <Text style={styles.text5}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Icon name="favorite" size={30} color="white" />
                    <Text style={styles.text5}>Favorite Job</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Details