import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import InputField from '../components/Account/SignupInput';
import SignupBackground from '../components/Account/SignupBackground';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container} enabled={true}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <SignupBackground />
            <View style={{ marginTop: "30%", width: "100%" }}>
                <InputField
                    label="Name"
                    value={name}
                    onChangeText={setName}
                />
                <InputField
                    label="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <InputField
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Sign UP</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: "#7C12A1",
    },
    btn: {
        width: "100%",
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: "10%",
    },
    btnTxt: {
        color: "#7C12A1",
        textAlign: 'center',
        fontWeight: "bold",
        fontFamily: "Sansation_Regular",
    },
});

export default Signup;