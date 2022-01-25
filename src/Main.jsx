import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import LandingPage from "./LandingPage/LandingPage"
import FrontPageStack from "./MainDisplay/FrontPageStack"

const DrawerNavigator = createDrawerNavigator();
const Main = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: 'Account'}}/>
        <Stack.Screen name="FrontPageStack" component={FrontPageStack} />
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