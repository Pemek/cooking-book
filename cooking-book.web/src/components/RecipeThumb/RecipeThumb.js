import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const RecipeThumb = (props) => {
    return (
        <Link to={`${props.id}`}>
            <div style={{ display: 'inline-block', margin: '10px' }}>
                <Card style={{ width: '300px', color: 'black'}}>
                    <Card.Img variant="top" src={props.img} 
                        style={{  }} />
                    <Card.Body style={{textAlign: 'center', height: '180px'}}>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Link>
    );
};

export default RecipeThumb;