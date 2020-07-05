import { useEffect, useState } from 'react'
import yelp from '../API/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const searchApi = async term => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: term,
                    location: 'New York',
                    limit: 50
                }
            })
            setResults(response.data.businesses)
        }catch(err){
            setError('Something went wrong')
        }
    }
    useEffect(() => {
        searchApi('Pasta')
    }, [])

    return [searchApi, results, error]
}
