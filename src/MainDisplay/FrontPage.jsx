import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import hiragana_katakana from "./../../json/hiragana_katakana"

import CharacterCard from "./../Components/CharacterCard"
import TopCard from './TopCard';
import CardChoices from './CardChoices';

const FrontPage = props => {
  const navigation = props.navigation
  const routeParams = props.route.params
  const username = routeParams.username
  const numberOfChoices = 4
  const [characters, setCharacters] = useState(hiragana_katakana)
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)

  const [topCard, setTopCard] = useState(null)
  const [choiceCards, setChoiceCards] = useState([])

  useEffect(() => {
    changeTopCard()
    selectRandomCharacters()
  }, [currentArrayIndex, characters])

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

  const getRandomNumber = (max = (characters.length - 1)) => {
    return Math.floor(Math.random() * (max - 1))
  }

  const changeTopCard = () => {
    setTopCard(characters[currentArrayIndex])
  }

  const selectRandomCharacters = () => {
    let randomChoices = []
    let currentIndexes = [currentArrayIndex]
    for (let i = 0; i < numberOfChoices; i++) {
      let randomNumber = getRandomNumber()
      while (currentIndexes.includes(randomNumber)) {
        randomNumber = getRandomNumber()
      }
      let characterSet = characters[randomNumber]
      randomChoices.push(characterSet)
      currentIndexes.push(randomNumber)
    }

    setChoiceCards(randomChoices)
  }

  const displayChoiceCards = () => {
    return <CardChoices characterSets={choiceCards} correctAnswerSet={topCard} />
  }

  return (
      <ScrollView style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.cards}>

            { topCard && <TopCard characterSet={topCard} /> }

            <View style={styles.bottomLine}></View>
            { topCard && displayChoiceCards() }
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
  },
  cards: {
    backgroundColor: '#fff',
  },
  bottomLine: {
    padding: 15,
    marginBottom: 10,
    borderBottomColor: 'rgba(50, 50, 50, 1)',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  outerContainer: {
    backgroundColor: '#fff'
  }
});

export default FrontPage;
