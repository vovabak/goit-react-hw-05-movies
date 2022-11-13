import { useOutletContext } from "react-router-dom";
import { List, Item } from "./Reviews.styled";

const Reviews = () => {
    const reviews = useOutletContext()[2];   

    if (reviews.length === 0) return

    return (
        <List>
            {reviews.map(({id, author, content, url}) =>
                <Item key={id}>
                    <h3>{author}</h3>
                    <p>{content}</p>
                    <a href={url} target="_blank" rel="noreferrer">See more</a>
                </Item>)}
        </List>
    )
}

export default Reviews;