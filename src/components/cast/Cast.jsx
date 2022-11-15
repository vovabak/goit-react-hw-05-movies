import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCast } from "api/Api";
import { List, Item } from "./Cast.styled";

export const Cast = () => {
    const [cast, setCast] = useState([]);    
    const movieId = useOutletContext();

    useEffect(() => {
        getCast(movieId).then(res => setCast(res.data.cast))
    }, [movieId])
   
    if(cast.length === 0) return

    return (
        <List>
            {cast.map(({id, name, profile_path}) =>
                <Item key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                    <p>{name}</p>
                </Item>)}
        </List>
    )
}

export default Cast;