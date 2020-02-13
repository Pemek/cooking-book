import React from 'react'

const RecipeHeaderImage = (props) => {
    return (
        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img 
                src={props.image} 
                style={{
                    filter: 'blur(30px)',
                    width: '100%',
                    transform: 'translateY(calc(-50% - 100px))',
                    opacity: '0.8'
                }} />
            <img 
                src={props.image} 
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    height: '300px',
                    transform: 'translateX(-50%) translateY(-50px)',
                    borderLeft: '10px solid white',
                    borderRight: '10px solid white',
                    borderRadius: '50%'
                }} />
        </div>
    );
};

export default RecipeHeaderImage;