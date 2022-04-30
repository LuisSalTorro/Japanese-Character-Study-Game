import { Text, View, StyleSheet } from "react-native"

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I am a single developer who enjoys Japanese studying.
      </Text>
      <Text style={styles.text}>
        I made this app in order to help others read Katakana and Hiragana.
      </Text>
      <Text style={styles.text}>
        If you enjoy this app, please consider leaving a positive review!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 15,
    justifyContent: 'flex-start',
    margin: 25,
  },
})

export default About
