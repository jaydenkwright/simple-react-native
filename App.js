import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SearchScreen from './src/Screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})



export default createAppContainer(navigator)

