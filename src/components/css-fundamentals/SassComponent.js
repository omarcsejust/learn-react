/*
1. SASS is a CSS Pre-processor
2. SASS files are executed on the server & sends CSS to the browser
3. SASS Must be installed before use in ReactJS
4. Install command: npm install node-sass
5. Sass file extension must be .scss, ex: file_name.scss
*/
import React from 'react';
import './FirstSass.scss';

const SassDemo = () => {
    return(
        <h3 className="TextStyle">Hello, I am SASS demo</h3>
    )
}

export default SassDemo;
