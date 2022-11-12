import { useState, useEffect } from "react";
import { getMovieTrends } from "api/Api";
import { MoviesList } from "components/moviesList/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);    

    useEffect(() => {        
    
        getMovieTrends().then(res => setMovies(res.data.results))
    }, [])    

    return (
        <MoviesList                
            movies={movies}                
        />
    )
}

export default Home;