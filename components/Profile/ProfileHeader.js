import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../Images/Babar.jpg')} style={styles.image}></Image>
            <Text style={styles.name}>Kenza Akesbi</Text>
            <Text style={styles.location}>Paris, France</Text>
            <Text style={styles.about}>I'm a positive person, I Love to travel and eat. Always be positive.</Text>
            <View style={styles.container3}>
                <TouchableOpacity style={styles.iconShare}>
                    <IonIcons name="chatbubble-ellipses-outline" size={30} color="black" style={{ textAlign: "center" }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFollow}>
                    <Text style={styles.txtFollow}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconShare}>
                    <Entypo name="share" size={30} color="black" style={{ textAlign: "center" }} />
                </TouchableOpacity>
            </View>
            <View style={styles.container4}>
                <View style={styles.numContainer}>
                    <Text style={styles.txtnum}>877</Text>
                    <Text style={{ color: "black", fontFamily: "Sansation_Bold", top: 3 }}>Posts</Text>
                </View>
                <View style={[styles.numContainer, styles.border]}>
                    <Text style={styles.txtnum}>24K</Text>
                    <Text style={{ color: "black", fontFamily: "Sansation_Bold", top: 3 }}>Followers</Text>
                </View>
                <View style={styles.numContainer}>
                    <Text style={styles.txtnum}>877</Text>
                    <Text style={{ color: "black", fontFamily: "Sansation_Bold", top: 3 }}>Following</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "42%",
        backgroundColor: "white",
        marginTop: "17%",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: "100%",
        position: "absolute"
    },
    image: {
        borderRadius: 150,
        height: "45%",
        width: "25%",
        position: "absolute",
        marginTop: "-14%"
    },
    name: {
        fontSize: 25,
        fontFamily: "Sansation_Bold",
        marginTop: "15%",
        color: "black",
    },
    location: {
        color: "black",
        fontSize: 16,
        fontFamily: "Sansation_Regular",
        marginTop: "3%"
    },
    about: {
        color: "black",
        fontSize: 15,
        fontFamily: "Sansation_Regular",
        marginTop: "3%",
        textAlign: "center",
        paddingHorizontal: 50
    },
    container3: {
        flexDirection: "row",
        marginTop: "4%"
    },
    btnFollow: {
        width: "38%",
        height: "50%",
        borderRadius: 30,
        backgroundColor: "#7C12A1",
        justifyContent: "center",
        marginLeft: "3%",
        marginRight: "3%",
    },
    txtFollow: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Sansation_Regular",
    },
    iconShare: {
        width: "12%",
        height: "50%",
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center"
    },
    txtnum: {
        fontSize: 25,
        color: "#4e4e4e",
        fontFamily: "Sansation_Bold",
    },
    border: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#b4b4b4",
    },
    container4: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "80%",
        marginTop: "-6%"
    },
    numContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "40%"
    },
})

export default ProfileHeader;