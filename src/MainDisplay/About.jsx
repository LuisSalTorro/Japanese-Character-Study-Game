import { Text, View, StyleSheet } from "react-native"

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I am a single developer who enjoys studying Japanese.
      </Text>
      <Text style={{ ...styles.text, ...styles.flatOut }}>
        I made this app in order to help beginners read Katakana, Hiragana, and
        Roomaji.
      </Text>
      <View style={styles.bottomLine}></View>
      <Text style={styles.text}>Match the bottom card with the top card.</Text>
      <Text style={styles.text}>
        Next to the top card, click the little
        <Text style={styles.smallCard}>カ</Text>
        to change the top card to <Text style={styles.bold}>Katakana</Text>.
      </Text>
      <Text style={styles.text}>
        For <Text style={styles.bold}>Roomaji</Text>, click the R.
      </Text>
      <Text style={styles.text}>
        For <Text style={styles.bold}>Hiragana</Text> , click ひ
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
    justifyContent: "flex-start",
    margin: 15,
  },
  bottomLine: {
    padding: 15,
    marginBottom: 10,
    borderBottomColor: "rgba(50, 50, 50, 1)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  smallCard: {
    backgroundColor: "#fff",

    // alignItems: "center",
    // alignSelf: "baseline",

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,

    padding: 4,
  },
  flatOut: {
    alignItems: "baseline",
    alignSelf: "baseline",
  },
  bold: {
      fontWeight: '700'
  }
})

export default About
