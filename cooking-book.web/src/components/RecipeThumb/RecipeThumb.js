import React from 'react'
import Card from 'react-bootstrap/Card'

const recipeThumb = (props) => {
    return (
        <div style={{ display: 'inline-block', margin: '10px' }}>

            <Card style={{ width: '24rem', border: 'none'}}>
                <Card.Img variant="top" src="http://forkgasm.com/images/bread-pudding.png" 
                    style={{ width: '90%', height: '90%', margin: 'auto' }} />
                {/* <Card.Body> */}
                    <Card.Text style={{'text-align': 'center'}}>
                        Jakieś ciasto
                    </Card.Text>
                {/* </Card.Body> */}
            </Card>
        </div>
    );
};

export default recipeThumb;