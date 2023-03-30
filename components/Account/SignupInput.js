import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const InputField = ({ label, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelStyle = {
        position: 'absolute',
        left: 0,
        top: isFocused || props.value.length > 0 ? -21 : 5,
        fontFamily: "Sansation_Bold",
        fontSize: 19,
        color: "white"
    };

    return (
        <View style={styles.container}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        width: '100%',
    },
    input: {
        paddingBottom: 8,
        height: 40,
        fontSize: 19,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        fontWeight: "500",
        color: "white",
    }
});

export default InputField;
