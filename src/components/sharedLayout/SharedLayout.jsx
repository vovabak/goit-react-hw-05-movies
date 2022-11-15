import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiThemoviedatabase } from 'react-icons/si';
import { IconContext } from "react-icons";
import { Loader } from "components/loader/Loader";
import { Container, Header, Link, Nav, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {

  return (
    <Container>
        <Header>
            <Logo>
              <IconContext.Provider
                            value={{
                                    size: '100%',
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
        <Suspense fallback={<Loader/>}>
            <Outlet />
        </Suspense>
        <ToastContainer
          limit={3}
        />
    </Container>
  );
};