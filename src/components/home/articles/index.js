import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native'
import { Card } from 'react-native-elements'

const Articles = ({ navigation}) => {
    const renderCard = () => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Article_Screen', {
                    id: 'sumnenuh92',
                    postData: {
                      title: "title weh a get send over" ,
                      content: "content addi article biut not the ttle" 
                    }
                    
                })}
            >
                <Card>
                    <Card.Title style={styles.cardTitle}>
                        <Text>YOOO</Text>
                    </Card.Title>
                    <Card.Divider />
                    <Text style={styles.cardText}>Jus a guh type sumn til mi feel tiad and guh sleep yzt</Text>
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView>
            {renderCard()}
        </ScrollView>
        // <View>
        //     <Text>Articles</Text>
        //     <Button title="Click Me"onPress={() => navigation.navigate('Article_Screen')}/>
        // </View>
    )
}

export default Articles

const styles = StyleSheet.create({
    cardTitle: {
        fontSize:20,
        textAlign: 'center'
    },
    cardText: {
        marginBottom:10,
        marginTop:10
    }
})
