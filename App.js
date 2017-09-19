import React from 'react'
import { StackNavigator } from 'react-navigation'

import Splash from './src/components/Splash'
import Dashboard from './src/components/Dashboard'

const App = StackNavigator({
  Splash: { screen: Splash },
  Dashboard: { screen: Dashboard },
});

export default App
