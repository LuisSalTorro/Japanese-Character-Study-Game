import { StyleSheet, Text, View } from 'react-native';

const CharacterCard = props => {
    const hiragana = props.character.Hiragana
    const katakana = props.character.Katakana
    const romaji = props.character.Romaji

    const displayCharacter = props.displayCharacter

    return (
        <View style={styles.card}>
            <Text style={styles.text}>
                {hiragana}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    elevation: 2,
    shadowColor: 'rgba(50, 50, 50, 1)',
    shadowOpacity: .3,
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,

    width: '40%',
    height: 100,
    padding: 15,

    justifyContent: 'center',
  },
  text: {
      fontSize: 45,
      alignSelf: 'center',
  }
});

export default CharacterCard;
