import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Drawer from "./MainDisplay/Drawer"

const Main = () => {
  const Stack = createNativeStackNavigator()

  const mainPageScreenOptions = {
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={mainPageScreenOptions}
      >
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main;
