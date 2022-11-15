import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { List, Item, Title, Link, Poster } from "./MoviesList.styled";


export const MoviesList = ({ movies }) => {
    const location = useLocation();
    
    return (
        <List>{movies.map(({id, title, poster_path}) =>
            <Item key={id}>
                <Link to={`/movies/:${id}`} state={{ from: location }}>                    
                    <Title>{title}</Title>                    
                    <Poster src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />                    
                </Link>    
            </Item>)
        }
        </List>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    })).isRequired,
}