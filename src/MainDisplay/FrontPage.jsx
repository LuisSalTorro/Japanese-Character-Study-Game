import { useEffect, useState } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

import hiragana_katakana from "./../../json/hiragana_katakana"

import TopCard from "./TopCard"
import CardChoices from "./CardChoices"

import { storeData, getData } from "../Storage/Store"
import { Audio } from "expo-av"
import { TouchableOpacity } from "react-native-gesture-handler"
import BannerAd from "./../Components/Ads/Banners"

const FrontPage = () => {
  const numberOfChoices = 6
  const [characters, setCharacters] = useState(hiragana_katakana)
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)

  const [topCard, setTopCard] = useState(null)
  const [choiceCards, setChoiceCards] = useState([])

  const [topCardAlphabet, setTopCardAlphabet] = useState("Hiragana")
  const [bottomCardsAlphabet, setBottomCardsAlphabet] = useState("Katakana")

  const [currentStreak, setCurrentStreak] = useState(0)
  const [highestStreak, setHighestStreak] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const correctSoundLocation = "./../Audio/correct.mp3"
  const wrongSoundLocation = "./../Audio/wrong.mp3"
  let sound = new Audio.Sound()

  useEffect(() => {
    changeTopCard()
    selectRandomCharacters()
    getHighestStreakFromLocalStorage()
    return () => {
      sound.unloadAsync()
    }
  }, [currentArrayIndex, characters])

  const playSoundEffects = async (mp3_location) => {
    sound = new Audio.Sound()
    if (mp3_location === correctSoundLocation) {
      await sound.loadAsync(require(correctSoundLocation))
    } else {
      await sound.loadAsync(require(wrongSoundLocation))
    }
    await sound.playAsync()
  }

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
    return await getData("highStreak").then((streak) => {
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
      playSoundEffects(correctSoundLocation)
      setCurrentStreak(currentStreak + 1)
      return "rgba(75, 181, 67, 1)"
    } else {
      playSoundEffects(wrongSoundLocation)
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

  const formToChangeTopCard = (selectedAlphabet) => {
    let newBottomCards = topCardAlphabet
    if (selectedAlphabet === "Romaji" || selectedAlphabet === "Katakana") {
      newBottomCards = "Hiragana"
    } else {
      newBottomCards = "Katakana"
    }
    const changeTo = selectedAlphabet
    setTopCardAlphabet(changeTo)
    setBottomCardsAlphabet(newBottomCards)
    randomize()
    setCurrentStreak(0)
  }

  // If top card is roomaji, bottom cards are hiragana
  const displayLittleCardOnSide = () => {
    if (topCardAlphabet === "Hiragana") {
      return [getSmallCard("カ", "Katakana"), getSmallCard("R", "Romaji")]
    } else if (topCardAlphabet === "Katakana") {
      return [getSmallCard("ひ", "Hiragana"), getSmallCard("R", "Romaji")]
    } else if (topCardAlphabet === "Romaji") {
      return [getSmallCard("ひ", "Hiragana"), getSmallCard("カ", "Katakana")]
    }
  }

  const getSmallCard = (display, selectedAlphabet) => {
    return (
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => {
            formToChangeTopCard(selectedAlphabet)
          }}
          style={styles.smallCard}
        >
          <Text>{display}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.cards}>
          {topCard && (
            <TopCard characterSet={topCard} displayAlphabet={topCardAlphabet} />
          )}
          <View style={styles.smallCards}>{displayLittleCardOnSide()}</View>

          <View style={styles.bottomLine}></View>
          <View style={styles.bottomCards}>
            {topCard && displayChoiceCards()}
          </View>
        </View>
        <Text style={styles.streak}>Streak: {getCurrentStreak()}</Text>
        {!isLoading && <Text>{getHighestStreak()}</Text>}
        <BannerAd />
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
  smallCard: {
    fontSize: 3,
    backgroundColor: "#fff",

    alignItems: "center",
    alignSelf: "baseline",

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,

    padding: 4,
  },
  smallCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
  },
})

export default FrontPage
