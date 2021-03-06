import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultDetail from '../Components/ResultDetail'

export default function Results({ title, results }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ title }</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultDetail result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})