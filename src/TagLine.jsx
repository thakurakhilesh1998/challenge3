import React from 'react';
import './index.css';
import TAGLINE from './Constants';
 
function TagLine()
{
    return(
        <div className="tagline">
        <h2>{TAGLINE}</h2>
        </div>
    );
}

export default TagLine;