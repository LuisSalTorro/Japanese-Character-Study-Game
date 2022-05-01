import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import FrontPage from "./FrontPage"
import About from "./About"

const Drawer = () => {
  const DrawerNavigator = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator.Navigator initialRouteName="Japanese Characters">
        <DrawerNavigator.Screen
          name="Learn Japanese"
          component={FrontPage}
        />
        <DrawerNavigator.Screen name="About" component={About} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Drawer
