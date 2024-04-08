
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'



export default function MotivationalQuotes() {
    const [selectedQuote, setSelectedQuote] = useState('');

    const quotes = ['“Fear is what stops you. Courage is what keeps you going.” — Unknown', '“Have the courage to follow your heart and intuition. They somehow know what you truly want to become.” — Steve Jobs', "“Courage is found in unlikely places.” — J.R.R. Tolkien", "“Change is inevitable but personal growth is a choice.” — Bob Proctor", "“I am not what happened to me, I am what I choose to become.” — Carl Jung",]

    useEffect(() => {
        selectQuote();
    }, [])

    const selectQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setSelectedQuote(quotes[random]); 
    }

    console.log(selectedQuote)
return (
    <View style={styles.rememberContainerWrapper}>
        <View style={styles.rememberContainer}>
            <View style={styles.remember}>
                <Image
                source={require("../components/images2/remember.png")} />
            </View>
            <View style={styles.inspiration}>
                <Text style={styles.quoteText}>{selectedQuote}</Text>
            </View>
            <TouchableOpacity onPress={selectQuote}>
                <View style={styles.repeatIcon}>
                    <Image source={require("../components/images2/repeaticon.png")} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 29,
        fontFamily: "Quicksand_400Regular",
        color: "#FEFEFE",
    },
    rememberContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    rememberContainerWrapper: {
        flex: 1.8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    remember: {
        flex: 1,
    },
    inspiration: {
        flex: 5,
        color: '#111111'
    },
    repeatIcon: {
        flex: 1,
    },
    quoteText : {
        color: '#111111',
        textAlign: 'center',
        padding: 150,
    }
});