import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title="Click Me"onPress={() => navigation.navigate('Article_Screen')}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
