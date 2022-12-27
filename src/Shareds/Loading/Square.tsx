import React, {useRef} from "react";
import {useDivResize} from "@/Hooks/useResize";

const Square: React.FC = () => {
    const ref = useRef<HTMLDivElement>()
    const {width} = useDivResize(ref)
    return <div ref={ref as any} style={{height: width}} className="loading-animation"/>
}

export default Square
