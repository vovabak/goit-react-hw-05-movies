import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Nav } from "./SharedLayout.styled";

export const SharedLayout = () => {

  return (
    <Container>
        <Header>
            <span style={{
              display: 'block',
              margin: 'auto 0',
            }}>Logo</span>
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