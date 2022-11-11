import { NavLink, useLocation } from "react-router-dom";

export const MoviesList = ({ movies, getMovieId }) => {
    const location = useLocation();
    
    return (
        <ul>{movies.map(({id, title, poster_path}) =>
            <li key={id}>
                <h2><NavLink to={`/movies/:${id}`} state={{ from: location }}>{title}</NavLink></h2>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />        
            </li>)
        }
        </ul>
    )
}