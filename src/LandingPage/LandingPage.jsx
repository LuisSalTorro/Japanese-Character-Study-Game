import { StyleSheet, Text, View, Button } from 'react-native';

const LandingPage = props => {
  const navigation = props.navigation

  const switchToFrontPage = () => {
    navigation.navigate('FrontPage')
  }

  return (
    <View style={styles.container}>
     <Text>
       Landing Page
     </Text>
     <Button
        title='Go to front page'
        onPress={() => switchToFrontPage()}
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
