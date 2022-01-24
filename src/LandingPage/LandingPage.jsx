import { StyleSheet, Text, View, Button } from 'react-native';
import { CommonActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LandingPage = props => {
  const navigation = props.navigation

  const switchToFrontPageAndPop = username => {
    const data = {
      username
    }
    const navigatorActions = {
      key: null,
      index: 1,
      routes: [
          {
            name: 'FrontPage',
            params: data
          }
      ]
    }
    navigation.dispatch(CommonActions.reset(navigatorActions))
  }

  return (
    <View style={styles.container}>
     <Text>
       Landing Page
     </Text>
     <Button
        title='Go to the main page'
        onPress={() => switchToFrontPageAndPop('userName goes here')}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingPage;
