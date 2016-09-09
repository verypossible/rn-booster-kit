import { Navigation } from 'react-native-navigation'

import Home from './Home'
import Login from './Login'

export const registerScreens = () => {
  Navigation.registerComponent('Login', () => Login)
  Navigation.registerComponent('Home', () => Home)
}
