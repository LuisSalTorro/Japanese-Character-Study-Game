import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CharacterCard = props => {
    const character = props.character
    const isTouchable = props.isTouchable
    const onPressFunction = props.onPressFunction

    const onPress = () => {
        onPressFunction(character)
    }

    const renderTouchable = () => {
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {character}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderNonTouchable = () => {
        return (
            <Text style={styles.text}>
                {character}
            </Text>
        )
    }

    return (
        <View style={styles.card}>
            {isTouchable ? renderTouchable() : renderNonTouchable()}
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

    justifyContent: 'center',
  },
  text: {
    fontSize: 45,
    alignSelf: 'center',
  },
  touchable: {
    justifyContent: 'center',
    borderRadius: 6,
    flex: 1,
  }
});

export default CharacterCard;
