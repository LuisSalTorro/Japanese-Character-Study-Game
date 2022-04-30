import { useEffect, useState } from "react"
import { StyleSheet, Text, View, ScrollView, Button } from "react-native"

import hiragana_katakana from "./../../json/hiragana_katakana"

import TopCard from "./TopCard"
import CardChoices from "./CardChoices"
import { useRoute } from "@react-navigation/native"

import { storeData, getData } from "../Storage/Store"
import { Audio } from "expo-av"
import { TouchableOpacity } from "react-native-gesture-handler"

const FrontPage = (props) => {
  const routeParams = useRoute().params
  // const username = routeParams.username
  const numberOfChoices = 6
  const [characters, setCharacters] = useState(hiragana_katakana)
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)

  const [topCard, setTopCard] = useState(null)
  const [choiceCards, setChoiceCards] = useState([])

  const [topCardAlphabet, setTopCardAlphabet] = useState("Hiragana") // will be passed down by props
  const [bottomCardsAlphabet, setBottomCardsAlphabet] = useState("Katakana") // will be passed down by props

  const [currentStreak, setCurrentStreak] = useState(0)
  const [highestStreak, setHighestStreak] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    changeTopCard()
    selectRandomCharacters()
    getHighestStreakFromLocalStorage()
  }, [currentArrayIndex, characters])

  const shuffleCharacters = () => {
    let charactersArray = characters
    let currentItem = characters.length,
      tempValue,
      randItem
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
    } else {
      setCurrentArrayIndex(currentArrayIndex + 1)
    }
  }

  const getRandomNumber = (max = characters.length - 1) => {
    return Math.floor(Math.random() * (max - 1))
  }

  const changeTopCard = () => {
    setTopCard(characters[currentArrayIndex])
  }

  const getUniqueRandomIndex = (currentIndexes) => {
    let randomNumber = getRandomNumber()
    while (currentIndexes.includes(randomNumber)) {
      randomNumber = getRandomNumber()
    }
    return randomNumber
  }

  const getHighestStreakFromLocalStorage = async () => {
    return await getData("highStreak")
      .then((streak) => {
        setHighestStreak(parseInt(streak))
        setIsLoading(false)
      })
  }

  /**
   * Variables:
   *  randomChoices ([]) sets the choice cards, which then become the option of cards to choose from
   *  currentIndexes ([]) keeps track of which characters have already been chosen. This prevents multiple of the same options
   *
   *  randomIndexToPlaceAnswer (object) is the answer card position
   */
  const selectRandomCharacters = () => {
    let randomChoices = []
    let currentIndexes = [currentArrayIndex]
    const randomIndexToPlaceAnswer = getRandomNumber(numberOfChoices + 1)
    for (let i = 0; i < numberOfChoices; i++) {
      if (randomIndexToPlaceAnswer === i) {
        randomChoices.push(characters[currentArrayIndex])
        continue
      }
      let randomNumber = getUniqueRandomIndex(currentIndexes)
      let characterSet = characters[randomNumber]
      randomChoices.push(characterSet)
      currentIndexes.push(randomNumber)
    }

    setChoiceCards(randomChoices)
  }

  const getCardValueOnPress = (selectedCharacterSet) => {
    if (selectedCharacterSet.Hiragana === topCard.Hiragana) {
      setTimeout(() => {
        randomize()
      }, 400)
      setCurrentStreak(currentStreak + 1)
      return "rgba(75, 181, 67, 1)"
    } else {
      setCurrentStreak(0)
      return "rgba(230, 35, 5, 1)"
    }
  }

  const displayChoiceCards = () => {
    return (
      <CardChoices
        characterSets={choiceCards}
        correctAnswerSet={topCard}
        displayAlphabet={bottomCardsAlphabet}
        onPressFunction={getCardValueOnPress}
      />
    )
  }

  const getCurrentStreak = () => {
    if (currentStreak > highestStreak) {
      storeData("highStreak", currentStreak.toString())
    }
    return currentStreak
  }

  const getHighestStreak = () => {
    return highestStreak
  }

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.cards}>
          {topCard && (
            <TopCard characterSet={topCard} displayAlphabet={topCardAlphabet} />
          )}

          <View style={styles.bottomLine}></View>
          <View style={styles.bottomCards}>
            {topCard && displayChoiceCards()}
          </View>
        </View>
        <Text style={styles.streak}>Streak: {getCurrentStreak()}</Text>
        {!isLoading && <Text>{getHighestStreak()}</Text>}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cards: {
    backgroundColor: "#fff",
  },
  bottomLine: {
    padding: 15,
    marginBottom: 10,
    borderBottomColor: "rgba(50, 50, 50, 1)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bottomCards: {
    width: "100%",
    flexWrap: "wrap",
  },
  outerContainer: {
    backgroundColor: "#fff",
  },
  streak: {
    fontSize: 30,
    margin: 25,
  },
})

export default FrontPage
