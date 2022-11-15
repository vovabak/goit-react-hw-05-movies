import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { getMovies } from "api/Api";
import { SearchBar } from "components/searchBar/SearchBar";
import { MoviesList } from "components/moviesList/MoviesList";
import { LoadMoreButton } from "components/loadMoreBtn/LoadMoreBtn";
import { Main, NotificationMessage } from "./Movies.styled";

const Movies = () => {   
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [showLoadMore, setShowLoadMore] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? '';

    useEffect(() => {
        setPage(1);
    }, [])
    
    useEffect(() => {

        if (!query || !page) return;

        setStatus('pending');        

        getMovies(query, page).then(res => {            
            
            if (res.data.total_pages === 0) {                
                throw new Error(`Sorry, tere's no ${query} movie in our store`)
            }

            if (res.data.total_pages === 1) {                
                setShowLoadMore(false);
            }

            if (res.data.total_pages < page && page > 1) {          
                setShowLoadMore(false);                
                toast("It seems You've just reached the end of the list");
            }
           
            setMovies(state => [...state, ...res.data.results]);
            setStatus('resolved');            

        }).catch(error => {
            setError(error.message);
            setShowLoadMore(false);
            setStatus('rejected');
        })
            
    }, [query, page])

    const handleSubmit = (query) => {        
        setMovies([]);
        setPage(1);
        setShowLoadMore(true);
        setSearchParams({ query });
    }

    const handleLoadMore = () => setPage(state => state + 1)    
    
    return (        
        <Main>
            <SearchBar searchQuery={query} onSubmit={handleSubmit} />
            {status === 'rejected' && <NotificationMessage>{error}</NotificationMessage>}
            {status === 'resolved' && <MoviesList
                movies={movies} />}
            {status === 'resolved' && showLoadMore &&
                <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </Main>
    )
}

export default Movies;