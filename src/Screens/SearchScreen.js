import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../Components/SearchBar'

const SearchScreen = () => {
    const [search, setSearch] = useState('')

    return (
        <View>
            <SearchBar 
            search={search} 
            setSearch={setSearch} 
            onSubmit={() => console.log(search)}/>
            <Text>{search}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen