import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const Extra = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.txt}>Posts</Text>
                <Text style={styles.txt}>View All</Text>
            </View>
            <View style={{ flexDirection: "row", width: "100%", marginTop: "7%" }}>
                <View style={{ width: "35%" }}>
                    <Image source={require("../../Images/laptop.jpg")} style={styles.img1} />
                    <Image source={require("../../Images/laptop.jpg")} style={styles.img2} />
                </View>
                <View style={{ width: "65%" }}>
                    <Image source={require("../../Images/iphone14.jpg")} style={styles.img3} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#f6f6f6",
        width: "100%",
        height: "34%",
        marginTop: "125%",
        paddingHorizontal: 20,
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 10,
    },
    txt: {
        fontFamily: "Sansation_Regular",
        color: "#7C12A1",
        fontSize: 16,
        fontWeight: "700"
    },
    img1: {
        width: "90%",
        height: "42%",

        marginVertical: "5%"
    },
    img2: {
        width: "90%",
        height: "42%",
    },
    img3: {
        width: "100%",
        height: "86%",
        marginTop: "3%",
    }
})

export default Extra