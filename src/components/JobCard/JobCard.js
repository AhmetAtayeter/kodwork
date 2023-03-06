import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './JobCard.style'

const JobCard = ({ job, onSelect }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onSelect} key={job.id}>
            <Text style={styles.text1}>{job.name}</Text>
            <Text>{job.company.name}</Text>
            <View style={styles.view1}>
                <Text style={styles.text2}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.text3}>{job.levels[0].name}</Text>
        </TouchableOpacity>
    )
}

export default JobCard