import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/home/articles'
import SingleArticle from '../components/home/articles/article'

import VideosScreen from '../components/home/videos'
import SingleVideo from '../components/home/videos/video'

export const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
       <Stack.Navigator 
            initialRouteName='Home_Screen'
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: 'red'
            }}
       
       >
        <Stack.Screen name="Home_Screen" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Article_Screen" component={SingleArticle} options={{headerShown: false}}/>
    </Stack.Navigator> 
    )
    
}

export const VideoStack = () => {
    return (
      <Stack.Navigator initialRouteName='Videos_Screen'>
        <Stack.Screen name="Videos_Screen" component={VideosScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Single_Video_Screen" component={SingleVideo} options={{headerShown: false}}/>
    </Stack.Navigator>  
    )
    
}