import { NavLink } from 'react-router-dom';
import { Thumb, Title } from './NotFound.styled';

export const NotFound = () => {
    return (
        <main>
            <Thumb>
                <Title>Page Not Found</Title>
                <p>Sorry, this page doesn’t exist...</p>
                <NavLink to='/' end>Back to Home page</NavLink>
            </Thumb>
        </main>
        
    )
}