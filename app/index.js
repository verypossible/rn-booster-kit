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
          label: 'One',
          screen: 'example.FirstTabScreen',
          title: 'Screen One'
        },
        {
          label: 'Two',
          screen: 'example.SecondTabScreen',
          title: 'Screen Two'
        }
      ]
    })
  }
}
