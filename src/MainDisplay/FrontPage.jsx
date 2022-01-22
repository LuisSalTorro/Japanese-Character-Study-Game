import { StyleSheet, Text, View } from 'react-native';

const FrontPage = props => {
    const navigation = props.navigation

    return (
        <View style={styles.container}>
           <Text>
               Main Page!
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
