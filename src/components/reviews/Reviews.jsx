import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReview } from "api/Api";
import { List, Item } from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState(null)    
    const movieId = useOutletContext();
    
    useEffect(() => {
        getReview(movieId).then(res => setReviews(res.data.results))            
    }, [movieId])

    if (!reviews) return;
    
    return (
        <List>{reviews.length === 0 ?
            <Item>                    
                <p>There're no reviews for this movie yet</p>
            </Item> :
            reviews.map(({id, author, content, url}) =>
                <Item key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <a href={url} target="_blank" rel="noreferrer">See more</a>
                </Item>)
            }
        </List >        
    )
}

export default Reviews;