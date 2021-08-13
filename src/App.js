import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { connect } from 'react-redux';

import Home from './components/home/Home'
import Login from './components/auth/Login'
import VideoScreen from './components/home/videos'
import ArticleScreen from './components/home/articles'

import { Stack, HomeStack, VideoStack } from './routes/stacks'
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Video" component={VideoStack} />
        <Drawer.Screen name="Article" component={ArticleScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
  )
  
}

class App extends React.Component {



  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          { 
            this.props.auth.isAuth ?
            ///whole app
             <Stack.Screen name="Main" component={MainDrawer} />
            :
            //login screen
            <Stack.Screen component={Login} name="Login" />
          }
        </Stack.Navigator>
      </NavigationContainer>
    ) 
  };
}

const mapStateToProps = (state) => ({ auth: state.auth})
export default connect(mapStateToProps)(App);