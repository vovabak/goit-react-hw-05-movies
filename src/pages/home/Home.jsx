import { useState, useEffect } from "react";
import { getMovieTrends } from "api/Api";
import { MoviesList } from "components/moviesList/MoviesList";
import { Main } from "pages/home/Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([]);    

    useEffect(() => {        
    
        getMovieTrends().then(res => setMovies(res.data.results))
    }, [])    

    return (
        <Main>
            <MoviesList                
            movies={movies}                
        />
        </Main>        
    )
}

export default Home;