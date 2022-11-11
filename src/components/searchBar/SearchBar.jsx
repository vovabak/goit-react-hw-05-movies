import { useState } from "react";

export const SearchBar = ({query: prevQuery, onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {     
        setQuery(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();         
        
        if (query.trim().toLowerCase() === '') {

            // toast('Please, enter some query')
            
            e.currentTarget.searchQuery.value = ''
            return
        }

        if (query === prevQuery) {

            // toast('Please, try different query')
            
            return
        }
                
        onSubmit(query)        
    }


    return (
        <form onSubmit={handleSubmit}>
            <button>Search</button>
            <label aria-label="search movie">
            <input type="text" name='searchQuery' onChange={handleChange}/>
        </label>
        </form>
    )
}