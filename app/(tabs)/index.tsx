import {Animated, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from "expo-router";
import FlatList = Animated.FlatList;
import {NavigationProp} from "@react-navigation/core";
import {RootStackPaamList} from "@/app/types";

export default function HomeScreen() {
    // Temporary data - replace with your state management later
    const decks = [
        {id: '1', title: 'React', cardCount: 3},
        {id: '2', title: 'JavaScript', cardCount: 5},
    ];

    const navigation = useNavigation<NavigationProp<RootStackPaamList>>();

    return (
        <View style={styles.container}>
            <FlatList
                data={decks}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.deckItem}
                        onPress={() => navigation.navigate('Deck', {deckId: item.id})}
                    >
                        <Text style={styles.deckTitle}>{item.title}</Text>
                        <Text>{item.cardCount} cards</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    deckItem: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    deckTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

