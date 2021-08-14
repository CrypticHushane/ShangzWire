import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { connect } from 'react-redux';

import Login from './components/auth/Login'
import Profile from './components/user/profile'

import CustomDrawer from './utils/customDrawer';

import { Stack, HomeStack, VideoStack } from './routes/stacks'

const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#A9A9A9',
            // overlayColor: 'transparent'
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
        <Drawer.Screen name="Video" component={VideoStack} options={{headerShown: false}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
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
             <Stack.Screen name="ShangzWire" component={MainDrawer} />
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