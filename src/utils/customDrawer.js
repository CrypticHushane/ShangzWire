import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Button } from 'react-native-elements/dist/buttons/Button';

const CustomDrawer = (props, { navigation}) => {
    // console.log(props.state.routes);
    
    const renderRoutes = () => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} 
                    
                    
                />
                <DrawerItem
                style={{ color: 'red'}}
                    label="Logout"
                    onPress={() => alert("Logout")}
                />
                            
            </DrawerContentScrollView>
        )
    }
    
    return (
        <>
            {renderRoutes()}
            
            
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})
