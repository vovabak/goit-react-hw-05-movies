import { NavLink } from 'react-router-dom';
import { Container } from './NotFound.styled';

export const NotFound = () => {
    return (
        <Container>
            <h1>Page Not Found</h1>
            <p>Sorry, this page dose’nt exist or You typed a wrong path name.</p>
            <NavLink to='/' end>Back to Home page</NavLink>
        </Container>
        
    )
}