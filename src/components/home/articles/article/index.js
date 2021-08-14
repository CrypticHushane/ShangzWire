import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'

const Article = ({ navigation, route}) => {
    const article = route.params
    // console.log(navigation)
    return (
        <ScrollView>
            <View>
                <Image
                    source={{uri:'https://picsum.photos/200/300'}}
                    style={{ width: '100%', height: 200}}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Button title="Go Back"onPress={() => navigation.goBack()}/>
                <Text>{article.postData.title}</Text>
                <Text>{article.postData.content}</Text>
            </View>
        </ScrollView>
        
        
    )
}

export default Article

const styles = StyleSheet.create({})
