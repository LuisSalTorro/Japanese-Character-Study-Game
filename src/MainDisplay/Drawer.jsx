import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import FrontPage from "./FrontPage"
import About from "./About"

const Drawer = (props) => {
  const routeParams = props.route.params
  const DrawerNavigator = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator.Navigator initialRouteName="Japanese Characters">
        <DrawerNavigator.Screen
          name="Learn Japanese"
          component={FrontPage}
          initialParams={{ username: "username" }}
        />
        <DrawerNavigator.Screen name="About" component={About} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Drawer
