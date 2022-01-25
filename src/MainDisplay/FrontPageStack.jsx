import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FrontPage from './FrontPage';
import About from './About';

const FrontPageStack = () => {
  const DrawerNavigator = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
     <DrawerNavigator.Navigator initialRouteName='FrontPage'>
        <DrawerNavigator.Screen name='FrontPage' component={FrontPage} />
        <DrawerNavigator.Screen name='About' component={About} />
    </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default FrontPageStack;