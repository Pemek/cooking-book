import React from 'react'

const Steps = (props) => {
    return (
        <div>
            <h2>Steps</h2>
                <ul>
                    {props.steps.map(s => {
                        return (
                            <li>{s.description}</li>
                        );
                    })}
                </ul>
        </div>
    );
}

export default Steps;