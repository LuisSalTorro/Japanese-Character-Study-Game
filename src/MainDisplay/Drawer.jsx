import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FrontPage from './FrontPage';
import About from './About';

const Drawer = (props) => {
  const routeParams = props.route.params
  const username = routeParams.username
  const DrawerNavigator = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
     <DrawerNavigator.Navigator initialRouteName='FrontPage'>
        <DrawerNavigator.Screen name='FrontPage' component={FrontPage} initialParams={{username}}/>
        <DrawerNavigator.Screen name='About' component={About} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Drawer;
