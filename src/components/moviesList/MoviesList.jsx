import { useLocation } from "react-router-dom";
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