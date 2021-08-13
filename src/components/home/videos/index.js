import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Videos = ({ navigation }) => {
    return (
        <View>
            <Text>Videos</Text>
            <Button title="Click Me"onPress={() => navigation.navigate('Single_Video_Screen')}/>
        </View>
    )
}

export default Videos

const styles = StyleSheet.create({})
