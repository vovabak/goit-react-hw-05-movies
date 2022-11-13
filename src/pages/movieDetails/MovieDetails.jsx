import { useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById, getCast, getReview } from "api/Api";
import { Main, Link, Info, Poster, Thumb, Title, Text } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();    
    const location = useLocation();    
    
    
    useEffect(() => {
        getMovieById(Number(movieId.slice(1))).then(res => setMovie(res.data))
    }, [movieId])

    useEffect(() => {
        getCast(Number(movieId.slice(1))).then(res => setCast(res.data.cast))
    }, [movieId])

    useEffect(() => {
        getReview(Number(movieId.slice(1))).then(res => setReviews(res.data.results))
    }, [movieId])

        
    if(!movie) return
    
    const { title, overview, poster_path, vote_average, genres } = movie;
    const genre = genres.map(genre => genre.name).join(', ');
    console.log(typeof(vote_average));
    return (        
        <Main>
            <Link to={location.state?.from ?? '/'}>Back to movie list</Link>
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
            <Outlet context={[cast, setCast, reviews, setReviews ]} />            
        </Main>
    )    
}

export default MovieDetails;