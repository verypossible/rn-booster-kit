import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'

registerScreens()

export default class App {
  constructor() {
    this.startApp()
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Login',
          screen: 'Login',
          title: 'Login'
        },
        {
          label: 'Home',
          screen: 'Home',
          title: 'Home'
        }
      ]
    })
  }
}
