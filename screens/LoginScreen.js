import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import LoginBackground from '../components/Account/LoginBackground';
import InputField from '../components/Account/LoginInput';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container} enabled={true}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <LoginBackground />
            <View style={{ marginTop: "45%", width: "100%" }}>
                <InputField
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <InputField
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <Text style={styles.forgetTxt}>Forget Password</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Sign IN</Text>
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
        backgroundColor: "white",
    },
    forgetTxt: {
        fontSize: 19,
        alignSelf: 'flex-end',
        marginTop: 25,
        marginBottom: 25,
        fontWeight: "500",
        color: "#afafaf",
        fontFamily: "Sansation_Bold",
    },
    btn: {
        width: "100%",
        height: 60,
        backgroundColor: "#7C12A1",
        justifyContent: "center"
    },
    btnTxt: {
        color: "white",
        textAlign: 'center',
        fontFamily: "Sansation_Regular",
    },
});

export default Login;