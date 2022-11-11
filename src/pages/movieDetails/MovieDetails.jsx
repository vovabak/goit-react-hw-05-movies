import { useParams, Outlet } from "react-router-dom";
import { MovieInfo } from "components/movieInfo/MovieInfo";

const MovieDetails = () => {    
    const {movieId} = useParams();
    
    
    return (
        <>
            <MovieInfo movieId={Number(movieId.slice(1))} />
            <Outlet context={Number(movieId.slice(1))} />
        </>
    )
}

export default MovieDetails;