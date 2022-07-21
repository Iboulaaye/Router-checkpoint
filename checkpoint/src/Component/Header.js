import React from "react";

const Header = (props) => {
    return (
        <div style={{marginTop : 30, marginBottom : 30 }} >
            <h1>{props.title}</h1>
        </div>
    )
} 

export default Header;