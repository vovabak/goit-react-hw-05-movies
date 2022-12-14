import { useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieById } from "api/Api";
import { Main, Link, Info, Poster, Thumb, Title, Text } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();    
    const location = useLocation();
    const toBackRef = useRef(location).current.state?.from ?? '/';
    const id = Number(movieId.slice(1));
 
    
    useEffect(() => {
        getMovieById(id).then(res => setMovie(res.data))
    }, [id])

        
    if(!movie) return
    
    const { title, overview, poster_path, vote_average, genres } = movie;
    const genre = genres.map(genre => genre.name).join(', ');
    
    return (        
        <Main>
            <Link to={toBackRef}>Back to movie list</Link>
            <Thumb>
                <Poster src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="title" />
                <Info>
                    <Title>{title}</Title>
                    <Text><b>Audience rate:</b> {(vote_average * 10).toFixed(1)}%</Text>
                    <Text><b>Plot:</b> {overview}</Text>
                    <Text><b>Genre:</b> {genre}</Text>
                </Info>
            </Thumb>
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'} style={{marginLeft: '10px'}}>Reviews</Link>
            <Suspense>
                <Outlet context={id} />
            </Suspense>
        </Main>
    )
}

export default MovieDetails;