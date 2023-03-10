import React from "react";
import { SafeAreaView, Text, ActivityIndicator, FlatList } from "react-native";
import styles from './Jobs.style'
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import JobCard from "../../components/JobCard/JobCard";

const Jobs = ({navigation}) => {

    const { loading, data, error } = useFetch(Config.API_URL + '?page=1')
    

    const handleJobSelect = job => {
        navigation.navigate('DetailsPage', {job})
    }

    const renderJob = ({item}) => <JobCard job={item} onSelect={() => handleJobSelect(item)} />

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderJob} key={data.results.id}/>
        </SafeAreaView>
    )
}

export default Jobs