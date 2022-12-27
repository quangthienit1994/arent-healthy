import React  from "react";

const Square: React.FC<{width?: any, height?: any}> = ({width, height = "2em"}) => {
    return <div style={{width, height}} className="loading-animation"/>
}

export default Square
