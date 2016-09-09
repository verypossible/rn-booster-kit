import { Navigation } from 'react-native-navigation'

import Home from '../components/Home'

export const registerScreens = () => {
  Navigation.registerComponent('example.FirstTabScreen', () => Home)
  Navigation.registerComponent('example.SecondTabScreen', () => Home)
  Navigation.registerComponent('example.PushedScreen', () => Home)
}
