import { StyleSheet, Text, View } from 'react-native';

const FrontPage = () => {
    return (
        <View style={styles.container}>
           <Text>
               Welcome!
           </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FrontPage;
