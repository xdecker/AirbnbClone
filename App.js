import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Explore from './screens/Explore';
import Trips from './screens/Trips';
import Saved from './screens/Saved';
import Profile from './screens/Profile';
import Inbox from './screens/Inbox';

const Tab = createMaterialBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Explore"
                activeColor="#f0edf6"
                inactiveColor = "#292929"
                barStyle={{ backgroundColor: '#694fad' }}

            >
                <Tab.Screen name="Explore" component = {Explore}
                    options={{
                        tabBarIcon : ({color}) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Saved" component = {Saved}
                     options={{
                         tabBarColor : '#98242d',
                         tabBarIcon : ({color}) => (
                             <MaterialCommunityIcons name="heart" color={color} size={26} />
                         )
                     }}
                />
                <Tab.Screen name="Trips" component = {Trips}
                     options={{
                         tabBarColor : '#0780bb',
                         tabBarIcon : ({color}) => (
                             <MaterialCommunityIcons name="map-marker-circle" color={color} size={26} />
                         )
                     }}
                />
                <Tab.Screen name="Inbox" component = {Inbox}
                    options={{
                        tabBarColor : '#c3817c',
                        tabBarIcon : ({color}) => (
                            <MaterialCommunityIcons name="forum" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component = {Profile}
                    options={{
                        tabBarColor : '#2974b2',
                        tabBarIcon : ({color}) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default App;
