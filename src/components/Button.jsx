import React from 'react'

const Button = ({text = "click"}) => {
    return(
        <button>{text}</button>
    );
};

export default Button;