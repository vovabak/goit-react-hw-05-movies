import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getReview } from "api/Api";

const Reviews = () => {
    const [reviews, setReview] = useState([])
    const movieId = useOutletContext()
    
    useEffect(() => {
        getReview(movieId).then(res => setReview(res.data.results))
    }, [movieId])    

    if (reviews.length === 0) return    

    return (
        <ul>
            {reviews.map(({id, author, content, url}) =>
                <li key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <a href={url} target="_blank" rel="noreferrer">See more</a>
                </li>)}
        </ul>
    )
}

export default Reviews;