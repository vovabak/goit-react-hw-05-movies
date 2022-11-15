import { useState, useEffect } from "react";
import { getMovieTrends } from "api/Api";
import { MoviesList } from "components/moviesList/MoviesList";
import { LoadMoreButton } from "components/loadMoreBtn/LoadMoreBtn";
import { Main, NotificationMessage } from "pages/home/Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [showLoadMore, setShowLoadMore] = useState(false);

    useEffect(() => setPage(1), [])

    useEffect(() => {

        if (!page) return;

        setStatus('pending');        
    
        getMovieTrends(page).then(res => {
            
            if (res.data.total_results <= 20 && res.data.total_pages !== 0) {                
                setStatus('resolved');
                setShowLoadMore(false);
            }

            setMovies(state => [...state, ...res.data.results]);
            setStatus('resolved');
            setShowLoadMore(true);

        }).catch(error => {
            setError(error.message);
            setShowLoadMore(false);
            setStatus('rejected');
        })
        
    }, [page])

    const handleLoadMore = () => setPage(state => state + 1);
        
    return (
        <Main>            
            {status === 'rejected' && <NotificationMessage>{error}</NotificationMessage>}
            {status === 'resolved' && <MoviesList                
                movies={movies} />}
            {status === 'resolved' && showLoadMore &&
                <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
        </Main>   
    )
}

export default Home;