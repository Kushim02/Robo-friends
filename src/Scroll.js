import React from "react";

const Scroll = ({children}) => {
    const style = {
        overflowY: 'scroll',
        height: '80vh',
        paddingTop: '10px',
    };
    return <div style={style}>{children}</div>
};

export default Scroll;