import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
// import { toast } from 'react-toastify';
import { IconContext } from "react-icons";
// import PropTypes from "prop-types";
import { Form, Button, ButtonLabel, Input } from './SearchBar.styled';

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
        <Form onSubmit={handleSubmit}>
            <Button type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                    <IconContext.Provider
                        value={{
                                size: '100%',
                                style: { verticalAlign: 'middle' }
                            }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
            </Button>
            <label aria-label="search movie">
                <Input type="text" name='searchQuery' onChange={handleChange} placeholder='Find Your favorite movie'/>
            </label>
        </Form>
    )
}

