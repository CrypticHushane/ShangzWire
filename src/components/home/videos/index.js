import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Tile } from 'react-native-elements'
import { Image } from 'react-native-elements/dist/image/Image'
import { ScrollView } from 'react-native-gesture-handler'

const Videos = ({ navigation }) => {
    const renderVideos = () => (
        <Tile 
            imageSrc={{uri:'https://picsum.photos/200/300'}}
            title="ShangzWire"
            icon={{
                name: 'play-circle',
                type: 'font-awesome',
                color: '#fff',
                size: 50
            }}
            contentContainerStyle={styles.contentContainer}
            containerStyle={styles.container}
            titleStyle={{fontSize:15}}
            onPress={() => navigation.navigate('Single_Video_Screen', {
                id:'ddhghd',
                postData: {
                    
                }
            })}
        />
    )
    return (
        <ScrollView>
            <View style={{padding: 15}}>
                {renderVideos()}
            </View>
        </ScrollView>
        
    )
}

export default Videos

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e1e8ee',
        shadowColor: 'rgba(0, 0, 0, .2)'
    },
    container: {
        width:'100%', 
        height:250,
        marginBottom:15
    }

})
