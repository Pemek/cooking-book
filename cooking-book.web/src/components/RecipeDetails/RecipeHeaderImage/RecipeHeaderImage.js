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
                    borderRadius: '50%',
                    boxShadow: '0px 0px 20px 15px rgba(255, 255, 255, 1)'
                }} />
        </div>
    );
};

export default RecipeHeaderImage;