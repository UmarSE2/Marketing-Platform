import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import BabarImage from '../../Images/Babar.jpg';

export const Data = [
    {
        image: BabarImage,
        title: "Umar"
    },
    {
        image: BabarImage,
        title: "Umar"
    },
    {
        image: BabarImage,
        title: "Umar"
    },
    {
        image: BabarImage,
        title: "Umar"
    },
]

const Card = (props) => {
    return (
        <View>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: "black",
        alignSelf: "center",
        fontFamily: "Sansation_Regular",
        top: 4,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 35,
    }
})

export default Card;
