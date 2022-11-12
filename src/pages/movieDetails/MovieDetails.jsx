import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "api/Api";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();    
    const location = useLocation();
    
    useEffect(() => {
        getMovieById(Number(movieId.slice(1))).then(res => setMovie(res.data))
    }, [movieId])
    
    if(!movie) return
    
    const { title, overview, poster_path, vote_average, genres } = movie;
    const genre = genres.map(genre => genre.name).join(', ');
    
    return (
        <>
            <NavLink to={location.state?.from ?? '/'}>Back to products</NavLink>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="title" />
            <h1>{title}</h1>
            <p>{vote_average}</p>
            <p>{overview}</p>
            <p>{genre}</p>
            <NavLink to={'cast'}>Cast</NavLink>
            <NavLink to={'reviews'}>Reviews</NavLink>
            <Outlet context={Number(movieId.slice(1))} />
        </>
    )    
}

export default MovieDetails;