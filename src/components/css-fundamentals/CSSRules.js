import React from 'react';
import css_modele_name from './CssModule.module.css';  // module file extension must be .module.css

const CSSRules = () => {

    // this is for inline css
    const myStyle = {
        backgroundColor: "green",  // notice the property name --> backgroundColor, in real css it is: background-color, also values are in double quote
        color: "white",
    }
    return (
        <div>
            {/* Inline CSS */}
            <h2 style={myStyle}>Hello I am example of inline CSS</h2>

            {/* Style from App.css */}
            <h2 className="My-custom-css">Hello my style from App.css </h2>

            {/* Style from CSS module: Must give a module file name during import, and access class using that name */}
            <h2 className={css_modele_name.ModuleTextStyle}>Hello my style from CSS Module file </h2>
        </div>
    );
};

export default CSSRules;