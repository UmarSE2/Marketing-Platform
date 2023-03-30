import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './ProfileData'
import { Data } from './ProfileData'

function ncard(val, index) {
    return (
        <Card
            key={index}
            image={val.image}
            title={val.title}
        />
    )
}

const FollowerProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.txt}>Follower</Text>
                <Text style={styles.txt}>View All</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 13, paddingHorizontal: 10, }}>
                {Data.map(ncard)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "16%",
        backgroundColor: "#f6f6f6",
        position: "absolute",
        marginTop: "95.6%",
        paddingHorizontal: 20,
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 5,
    },
    txt: {
        fontFamily: "Sansation_Regular",
        color: "#7C12A1",
        fontSize: 16,
        fontWeight: "700"
    }
})

export default FollowerProfile