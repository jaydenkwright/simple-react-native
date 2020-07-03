import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ setSearch, search, onSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" color="black" style={styles.icon} />
            <TextInput 
            placeholder='Search...' 
            value={search}
            onChangeText={setSearch}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onSubmit}
            style={styles.inputStyle} />


        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar