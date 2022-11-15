import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { Form, Button, ButtonLabel, Label, Input } from './SearchBar.styled';

export const SearchBar = ({searchQuery, onSubmit}) => {
    const [query, setQuery] = useState(searchQuery);

    const handleChange = (e) => {     
        setQuery(e.currentTarget.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();         
        
        if (query.trim().toLowerCase() === '') {

            toast('Please, enter some query')
            
            e.currentTarget.input.value = ''
            return
        }

        if (query === searchQuery) {

            toast('Please, try different query')
            
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
            <Label aria-label="search movie">
                <Input value={query} type="text" name='input' onChange={handleChange} placeholder='Find Your favorite movie'/>
            </Label>
        </Form>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
}