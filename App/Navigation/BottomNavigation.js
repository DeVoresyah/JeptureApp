import React from 'react'
import { Image, Text, View, Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { Images } from '../Themes'

// Import Styles
import styles from './Styles/NavigationStyles'

// Import Index Tab Screen
import ExploreScreen from '../Containers/ExploreScreen'
import MusicScreen from '../Containers/MusicScreen'
import DownloadScreen from '../Containers/DownloadScreen'
import ProfileScreen from '../Containers/ProfileScreen'

// Create Bottom Bar
export default createBottomTabNavigator({
    Explore: {
        screen: createStackNavigator({
            ExploreScreen
        }, {
            headerMode: 'none',
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image source={Images.exploreDefault} style={styles.menuIcon} resizeMode='stretch' />
                )
            }
        })
    },
    Music: {
        screen: createStackNavigator({
            MusicScreen
        }, {
            headerMode: 'none',
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image source={Images.earphoneDefault} style={styles.menuIcon} resizeMode='stretch' />
                )
            }
        })
    },
    Download: {
        screen: createStackNavigator({
            DownloadScreen
        }, {
            headerMode: 'none',
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image source={focused ? Images.downloadActive : Images.downloadDefault} style={styles.menuIcon} resizeMode='stretch' />
                )
            }
        })
    },
    Profile: {
        screen: createStackNavigator({
            ProfileScreen
        }, {
            headerMode: 'none',
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image source={focused ? Images.profileActive : Images.profileDefault} style={styles.menuIcon} resizeMode='stretch' />
                )
            }
        })
    },
}, {
    initialRouteName: 'Download',
    tabBarOptions: {
        style: {
            backgroundColor: '#f8f8f8',
            borderTopColor: 'rgba(109,109,109, 1)'
        },
        showLabel: false
    },
    allowFontScaling: false
})