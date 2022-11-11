import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getCast } from "api/Api";

export const Cast = () => {
    const [cast, setCast] = useState([]);    
    const movieId = useOutletContext()

    useEffect(() => {
        getCast(movieId).then(res => setCast(res.data.cast))
    }, [movieId])    

    if(cast.length === 0) return    

    return (
        <ul>
            {cast.map(({id, name, profile_path}) =>
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="name" />
                    <p>{name}</p>
                </li>)}
        </ul>
    )
}

export default Cast;