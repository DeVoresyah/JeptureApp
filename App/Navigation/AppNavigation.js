import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Bottom Bar
import BottomBar from './BottomNavigation'

// Slash Screen
import SplashScreen from '../Containers/SplashScreen'

// OnBoarding
import OnBoardingScreen from '../Containers/OnBoardingScreen'

import ExploreScreen from '../Containers/ExploreScreen'
import MusicScreen from '../Containers/MusicScreen'
import DownloadScreen from '../Containers/DownloadScreen'
import ProfileScreen from '../Containers/ProfileScreen'

const AuthStack = createStackNavigator({
  OnBoarding: { screen: OnBoardingScreen }
}, {
  initialRouteName: 'OnBoarding',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const AppStack = createStackNavigator({
  MainScreen: {
    screen: BottomBar,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },

  Explore: { screen: ExploreScreen },
  Music: { screen: MusicScreen },
  Download: { screen: DownloadScreen },
  Profile: { screen: ProfileScreen }
}, {
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));