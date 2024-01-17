import React from 'react';

const Oval = () => {
    const ovalStyle = {
        width: '200px',
        height: '100px',
        borderRadius: '50%',
        background: 'blue',
        textAlign: 'center'
    };

    return (
        <div style={ovalStyle}>
            <h1>Todays Date</h1>
        </div>
    );
};

export default Oval;
