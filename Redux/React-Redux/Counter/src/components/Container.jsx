import React from 'react'

function Container({children}) {
    return (
        <div class=" mt-3 card text-center container" style={{ width: "70%" }}>
            {children}
        </div>
    )
}

export default Container
