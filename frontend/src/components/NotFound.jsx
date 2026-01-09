import React from 'react';

function NotFound() {
    return ( 
        <>
            <div className="container p-5 text-center">
                <img 
                    src="/media/images/404PageNotFount.png" 
                    alt="Page Not Found" 
                    style={{
                        width: "60%"
                    }}
                />
            </div>
        </>
    );
}

export default NotFound;