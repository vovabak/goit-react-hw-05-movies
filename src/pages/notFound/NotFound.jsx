import { NavLink } from 'react-router-dom';
import { Container, Title } from './NotFound.styled';

export const NotFound = () => {
    return (
        <Container>
            <Title>Page Not Found</Title>
            <p>Sorry, this page dose’nt exist or You typed a wrong path name.</p>
            <NavLink to='/' end>Back to Home page</NavLink>
        </Container>
        
    )
}