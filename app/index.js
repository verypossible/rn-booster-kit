import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'

import configureStore from './store'

const store = configureStore()

registerScreens(store, Provider)

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
