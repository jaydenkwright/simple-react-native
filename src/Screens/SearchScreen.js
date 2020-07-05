import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import Results from '../Components/Results'

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const [searchApi, results, error] = useResults()

    const filterResults = price => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View style={{ flex: 1}}> 
            <SearchBar 
            search={search} 
            setSearch={setSearch} 
            onSubmit={() => searchApi(search)}/>
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <Results title='Cost Effective' results={filterResults('$')} />
                <Results title='Bit Pricier' results={filterResults('$$')}/>
                <Results title='Big Spender' results={filterResults('$$$')}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen