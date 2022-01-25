import { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const CharacterCard = props => {
    const characterSet = props.characterSet
    const character = props.character
    const isTouchable = props.isTouchable
    const onPressFunction = props.onPressFunction

    const [cardStyle, setCardStyle] = useState({
        opacity: 1,
    })

    const onPressOut = () => {
        setCardStyle({
            opacity: 1,
            backgroundColor: '#fff'
        })
        let color = onPressFunction(characterSet)
        setCardStyle({
            opacity: 1,
            backgroundColor: color
        })
        setTimeout(() => {
            setCardStyle({
            opacity: 1,
            backgroundColor: '#fff'
        })
        }, 250)
    }

    const onPressIn = () => {
        setCardStyle({
            transform: [{scale: 1.2}]
        })
    }

    const renderTouchable = () => {
        return (
            <Pressable
                style={{...styles.touchable, ...styles.cardOpacity}}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
            >
                <Text style={{...styles.text, ...styles.dynamicCharacter}}>
                    {character}
                </Text>
            </Pressable>
        )
    }

    const renderNonTouchable = () => {
        return (
            <Text style={styles.text}>
                {character}
            </Text>
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
        },
        cardOpacity: cardStyle
        });

    return (
        <View style={styles.card}>
            {isTouchable ? renderTouchable() : renderNonTouchable()}
        </View>
    )
}



export default CharacterCard;
