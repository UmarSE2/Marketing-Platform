import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SignupBackground = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.redOval} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Create</Text>
                <Text style={styles.text}>Account</Text>
            </View>
            <View style={styles.bottomOval} />
            <Text style={styles.footerText}>Already have an Account?
                <Text onPress={() => navigation.navigate("Login")}> Sign UP</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute"
    },
    redOval: {
        position: "absolute",
        width: 420,
        height: 410,
        borderRadius: 200,
        top: -675,
        left: -380,
        backgroundColor: '#e4003a',
    },
    textContainer: {
        position: "absolute",
        top: -235,
        left: -170,
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

export default SignupBackground;
