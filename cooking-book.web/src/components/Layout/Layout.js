import React from 'react'
import logo from '../../logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <header>
                <Navbar bg="light" expand="lg" style={{'min-height': '80px' }}>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' '}
                            Cooking Book
                        </Navbar.Brand>
                    </Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;