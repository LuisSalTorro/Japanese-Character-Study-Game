import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import hiragana_katakana from "./../../json/hiragana_katakana"

import CharacterCard from "./../Components/CharacterCard"

const FrontPage = props => {
  const navigation = props.navigation
  const routeParams = props.route.params
  const username = routeParams.username
  const numberOfChoices = 5
  const [characters, setCharacters] = useState(hiragana_katakana)
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)

  const shuffleCharacters = () => {
    let charactersArray = characters
    let currentItem = characters.length, tempValue, randItem
    while (0 !== currentItem) {
        randItem = Math.floor(Math.random() * currentItem)
        currentItem -= 1
        tempValue = charactersArray[currentItem]
        charactersArray[currentItem] = charactersArray[randItem]
        charactersArray[randItem] = tempValue
    }
    return charactersArray
  }

  const randomize = () => {
    setCharacters(shuffleCharacters())
    if (currentArrayIndex >= characters.length - 1) {
      setCurrentArrayIndex(0)
    }
    else {
      setCurrentArrayIndex(currentArrayIndex + 1)
    }
  }

  const selectRandomCharacters = () => {
    let arrayOfRandomCharacterObjects = []
    let currentIndexes = [currentArrayIndex]
    const getRandomNumber = () => Math.floor(Math.random() * (characters.length - 1))
    for (let i = 0; i < numberOfChoices; i++) {
      let randomNumber = getRandomNumber()
      while (currentIndexes.includes(randomNumber)) {
        randomNumber = getRandomNumber()
      }
      let characterSet = characters[randomNumber]
      arrayOfRandomCharacterObjects.push(characterSet)
      currentIndexes.push(randomNumber)
    }
    return Object.entries(arrayOfRandomCharacterObjects).map(([key, value]) => <CharacterCard key={key} character={value} /> )
  }

  return (
      <ScrollView style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.cards}>
            <View>
              {selectRandomCharacters()}
            </View>
          </View>
          <Button
            title='shuffle'
            onPress={() => randomize()}
          />
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  outerContainer: { backgroundColor: '#fff'}
});

export default FrontPage;
