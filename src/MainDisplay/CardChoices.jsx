import { StyleSheet, Text, View } from 'react-native';

import CharacterCard from "./../Components/CharacterCard"

const CardChoices = ({ characterSets, displayCharacter, correctAnswerSet }) => {
    const renderCards = () => {
        return characterSets.map((item, index)=> <CharacterCard key={index} character={item} />)
    }

    return (
        <View style={styles.container}>
            {renderCards()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})
export default CardChoices;