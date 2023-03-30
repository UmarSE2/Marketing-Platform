import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const LoginBackground = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.purpleOval} />
            <View style={styles.redOval} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcom</Text>
                <Text style={styles.text}>Back</Text>
            </View>
            <View style={styles.bottomOval} />
            <Text style={styles.footerText}>Don't have an Account?
                <Text onPress={() => navigation.navigate("Signup")}> Sign UP</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute"
    },
    purpleOval: {
        position: "absolute",
        width: 410,
        height: 410,
        borderRadius: 200,
        top: -490,
        left: -70,
        backgroundColor: '#7C12A1',
    },
    redOval: {
        position: "absolute",
        width: 420,
        height: 410,
        borderRadius: 200,
        top: -520,
        left: -310,
        backgroundColor: '#e4003a',
    },
    textContainer: {
        position: "absolute",
        top: -220,
        left: -150,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 33,
        fontFamily: "Sansation_Bold",
    },
    bottomOval: {
        position: "absolute",
        width: 550,
        height: 530,
        borderRadius: 300,
        alignSelf: "center",
        top: 300,
        backgroundColor: '#e4003a',
    },
    footerText: {
        position: "absolute",
        color: "white",
        top: 340,
        alignSelf: "center",
        fontSize: 15,
        fontFamily: "Sansation_Regular",
    }
});

export default LoginBackground;
