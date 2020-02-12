import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const layout = (props) => {
    return (
        <div>
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Cooking Book</Navbar.Brand>
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

export default layout;