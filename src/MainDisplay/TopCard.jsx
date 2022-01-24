import { StyleSheet, Text, View } from 'react-native';

import CharacterCard from "./../Components/CharacterCard"

const TopCard = ({ characterSet, displayCharacter }) => {
    return (
        <View style={styles.container}>
            <CharacterCard character={characterSet} />
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