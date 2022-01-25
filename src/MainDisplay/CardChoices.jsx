import { StyleSheet, Text, View, Pressable } from 'react-native';

import CharacterCard from "./../Components/CharacterCard"

const CardChoices = ({ characterSets, correctAnswerSet, onPressFunction, displayAlphabet = 'Hiragana'}) => {
    const isCorrectAnswer = correctAnswerSet[displayAlphabet] === characterSets[displayAlphabet]

    const renderCards = () => {
        return characterSets.map((item, index)=> (
            <CharacterCard
                key={index}
                character={item[displayAlphabet]}
                isTouchable={true}
                onPressFunction={onPressFunction}
                characterSet={item}
            />
        ))
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
    },
})
export default CardChoices;