import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SiThemoviedatabase } from 'react-icons/si';
import { IconContext } from "react-icons";
import { Container, Header, Link, Nav, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {

  return (
    <Container>
        <Header>
            <Logo>
              <IconContext.Provider
                            value={{
                                    size: '10%',
                                    style: { verticalAlign: 'middle' }
                                }}>
                            <SiThemoviedatabase />
              </IconContext.Provider>          
            </Logo>
            <Nav>
                <Link to='/' end>Home</Link>
                <Link to='/movies'>Movies</Link>        
            </Nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </Container>
  );
};