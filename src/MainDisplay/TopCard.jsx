import { StyleSheet, Text, View } from 'react-native';

import CharacterCard from "./../Components/CharacterCard"

const TopCard = ({ characterSet, displayCharacter = 'Hiragana' }) => {
    return (
        <View style={styles.container}>
            <CharacterCard character={characterSet[displayCharacter]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        padding: 15,
        width: '100%',
        flexDirection: 'row',
    }
})
export default TopCard;