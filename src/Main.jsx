import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingPage from "./LandingPage/LandingPage"
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
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: 'Account'}}/>
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Main;