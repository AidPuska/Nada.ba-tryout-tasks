import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DetailsComponent from './DetailsComponent';
import Map from './Map';
import { NavigationContainer } from '@react-navigation/native'
import Search from './Search';
import Chat from './Chat';

import map from '../assets/map.png'
import mapBold from '../assets/mapBold.png'
import ui from '../assets/navigationUi.png'
import uiBold from '../assets/uiBold.png'


const TabNavigation = (props) => {

    const Tab = createBottomTabNavigator();

    console.log(props)



  return (
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName='Ui'
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'white',
            })}
        >
            <Tab.Screen name="Ui" options={{tabBarActiveTintColor: 'white', headerShown: false, tabBarIcon: ({focused}) => (
                <Image style={!focused ? {width: 50, height: 50} : {width: 30, height: 30}} source={focused ? uiBold : ui} />
            )}} tabBarShowLabel={false} component={DetailsComponent} />
            <Tab.Screen name="Search" options={{headerShown: false, tabBarIcon: ({color, size}) => (
                <Image style={{width: 30, height: 30}} source={require('../assets/AnarkeyIconsByAnima.png')} />
                )}} component={Search} />
            <Tab.Screen name="Map" options={{headerShown: false, tabBarIcon: ({color, size, focused}) => (
                <Image source={!focused ? map : mapBold} />
            )}} component={Map} />
            <Tab.Screen options={{tabBarIcon: ({color, size}) => (
                <Image source={require('../assets/chat.png')} />
            )}} name="Chat" component={Chat} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation