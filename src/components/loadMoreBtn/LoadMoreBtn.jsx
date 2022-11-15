import { Button } from "./LoadMoreBtn.styled"
import PropTypes from "prop-types";
    
export const LoadMoreButton = ({onClick, children}) => {
    return <Button type="button" onClick={onClick}>{children}</Button>
}

LoadMoreButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
}