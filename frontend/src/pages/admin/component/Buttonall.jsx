import React from 'react'
import './test.css';

const Buttonall = ({ href, children }) => {
    return (
        <button className="orange-button" href={href}>
            {children} {/* Render prop children di dalam tombol */}
        </button>
    );
};

export default Buttonall;