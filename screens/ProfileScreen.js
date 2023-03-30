import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import FollowerProfile from '../components/Profile/FollowerProfile'
import Posts from '../components/Profile/Posts'
import ProfileHeader from '../components/Profile/ProfileHeader'

const ProfileScreen = () => {
    return (
        <View>
            <ImageBackground source={require("../Images/Babar.jpg")}
                resizeMode='cover' style={styles.imgBackground} />
            <ProfileHeader />
            <FollowerProfile />
            <Posts />
        </View>
    )
}

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
})

export default ProfileScreen;