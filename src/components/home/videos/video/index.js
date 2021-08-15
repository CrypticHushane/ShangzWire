import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const SingleVideo = ({ navigation }) => {
    return (
        <View>
            <Text>Single Video</Text>
            <Button title="Click Me"onPress={() => navigation.navigate('Videos_Screen')}/>
        </View>
    )
}

export default SingleVideo

const styles = StyleSheet.create({})
