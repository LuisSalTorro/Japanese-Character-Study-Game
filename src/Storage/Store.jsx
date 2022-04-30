import AsyncStorage from "@react-native-async-storage/async-storage"

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
    else {
        return 0
    }
  } catch (e) {
    // error reading value
  }
}


// const initialState = {
//   topCard: 'Hiragana',
//   bottomCards: 'Katakana'
// }

// const cardState = (state=initialState, action) => {
//   switch (action.type) {
//     case 'changeCards':
//       return {
//         topCard: action.topCard,
//         bottomCards: action.bottomCards, // idk if i'll need to uncomment
//       }
//       default:
//         return state
//     }
// }

// let cardStore = createStore(cardState)

export { storeData, getData }
