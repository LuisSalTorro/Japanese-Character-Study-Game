import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import FrontPage from "./FrontPage"
import About from "./About"
import ChangeCardSettings from "./ChangeCardSettings"

const Drawer = (props) => {
  const routeParams = props.route.params
  // const username = routeParams.username
  const DrawerNavigator = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator.Navigator initialRouteName="Japanese Test">
        <DrawerNavigator.Screen
          name="Japanese Test"
          component={FrontPage}
          initialParams={{ username: "username" }}
        />
        <DrawerNavigator.Screen name="About" component={About} />
        <DrawerNavigator.Screen
          name="Settings"
          component={ChangeCardSettings}
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  )
}

export default Drawer
