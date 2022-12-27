import {useWindowSize} from "react-use";
import React, {useLayoutEffect, useState} from "react";

export const useDivResize = (ref: React.MutableRefObject<HTMLElement | undefined>) => {
    const {width} = useWindowSize()

    const [state, setState] = useState({width: ref.current?.clientWidth})

    useLayoutEffect(() => {
        setState({
            width: ref.current?.clientWidth
        })
    }, [ref, width])

    return state;
}
