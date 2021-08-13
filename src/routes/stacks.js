import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../components/home/Home'
import SingleArticle from '../components/home/articles/article'

// import Login from '../components/auth/Login'

import VideosScreen from '../components/home/videos'
import SingleVideo from '../components/home/videos/video'

import ArticleScreen from '../components/home/articles'

export const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
       <Stack.Navigator initialRouteName='Home_Screen'>
        <Stack.Screen name="Home_Screen" component={Home} />
        <Stack.Screen name="Article_Screen" component={SingleArticle} />
    </Stack.Navigator> 
    )
    
}

export const VideoStack = () => {
    return (
      <Stack.Navigator initialRouteName='Videos_Screen'>
        <Stack.Screen name="Videos_Screen" component={VideosScreen} />
        <Stack.Screen name="Single_Video_Screen" component={SingleVideo} />
    </Stack.Navigator>  
    )
    
}