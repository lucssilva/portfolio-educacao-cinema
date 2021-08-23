import React from 'react';

export const Loading = () => {
    return (
        <div className="loading" style={{
            zIndex: 2,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading" />
        </div>
    )
}

