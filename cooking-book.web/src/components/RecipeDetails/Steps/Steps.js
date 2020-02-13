import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Steps = (props) => {
    return (
        <Alert variant="warning">
            <h2>Steps</h2>
                <ul>
                    {props.steps.map(s => {
                        return (
                            <li>{s.description}</li>
                        );
                    })}
                </ul>
        </Alert>
    );
}

export default Steps;