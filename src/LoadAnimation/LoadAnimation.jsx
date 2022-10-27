import React from 'react';
import "../LoadAnimation/LoadAnimation.css"
const LoadAnimation = () => {
    return (
        <div className='loader'>
            <div className='load'></div>
            <div className='load'></div>
        </div>
    );
};

export default LoadAnimation;