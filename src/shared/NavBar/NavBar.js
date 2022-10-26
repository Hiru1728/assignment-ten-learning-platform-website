import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to='/'>Learn Programming</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link > <Link to='/login'>Log In</Link></Nav.Link> */}
                        <Nav.Link > <Link>
                            {
                                user?.uid ?
                                    <>
                                        <button>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Log In</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </Link></Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                >
                                    <Image
                                        roundedCircle
                                        src={user.photoURL}
                                        style={{ height: '30px' }}
                                    >

                                    </Image>
                                </OverlayTrigger>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default NavBar;