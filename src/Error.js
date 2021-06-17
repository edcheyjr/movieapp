import React from 'react';

import logo from './img/404.gif';

const Error = () => {
    return (
        <div className="container mx-auto text-red-500 ">
            <section>
            <img src={logo} alt="404" className="mx-auto "/>
            <h2 className="font-medium-bold text-3xl text-center">404. page not found</h2>
            </section>
        </div>
    )
}

export default Error
