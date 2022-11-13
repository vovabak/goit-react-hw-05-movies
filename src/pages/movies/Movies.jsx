import { useState, useEffect } from "react";
import { getMovies } from "api/Api";
import { SearchBar } from "components/searchBar/SearchBar";
import { MoviesList } from "components/moviesList/MoviesList";
import { Main } from "./Movies.styled";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = (newQuery) => {        
        setQuery(newQuery);        
    }

    useEffect(() => {

        if (!query) return;

        getMovies(query).then(res => {            
            setMovies(res.data.results)
        })
        
    }, [query])

    return (
        <Main>
            <SearchBar onSubmit={handleSubmit} />
            <MoviesList
                movies={movies}                
            />
        </Main>
    )
}

export default Movies;