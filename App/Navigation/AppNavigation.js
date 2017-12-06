import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import HelpScreen from '../Containers/HelpScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import MyOrdersScreen from '../Containers/MyOrdersScreen'
import MenuScreen from '../Containers/MenuScreen'
import AppLanderScreen from '../Containers/AppLanderScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  HelpScreen: { screen: HelpScreen },
  SettingsScreen: { screen: SettingsScreen },
  MyOrdersScreen: { screen: MyOrdersScreen },
  MenuScreen: { screen: MenuScreen },
  AppLanderScreen: { screen: AppLanderScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AppLanderScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
