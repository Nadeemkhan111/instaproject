import React from 'react';
import "../Carrousel/Carrousel.css"
const Carrousel = () => {
    return (
        <div className='carrousel'>
            <article className='card'><h1>HTML5</h1></article>
            <article className='card'><h1>CSS3</h1></article>
            <article className='card'><h1>JAVASCRIPT</h1></article>
            <article className='card'><h1>REACT.JS</h1></article>
            <article className='card'><h1>REDUX</h1></article>
            <article className='card'><h1>MATERIAL UI</h1></article>
            <article className='card'><h1>BOOTSTRAP</h1></article>
        </div>
    );
};

export default Carrousel;