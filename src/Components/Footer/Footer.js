import React from 'react';

const Footer = () => {
    return (
        <div className='container pt-5'>
            <div className='pt-5'>
                <h1>How React Works?</h1>
                <p className='pb-5'>React is not a framework. React is javascript library. React creates user interfaces in a predictable and efficient way using declarative code. SPA means Single Page Aplication which can be build by reacts. React build based on Components state and effect. React works with node package manager. Its has nodes module.</p>
                <h1 className='pt-5'>How use state works?</h1>
                <p>useState is a Hook that allows us to have state variables in functional components. We can  pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Footer;