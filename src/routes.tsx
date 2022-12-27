import {RouteObject} from "react-router-dom";
import React from "react";

const Component: React.FC<{ lazy: React.LazyExoticComponent<any> }> = ({lazy: Lazy}) => {
    return <Lazy/>
}

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Component lazy={React.lazy(() => import("@/Pages/Home"))}/>
    },
    {
        path: "/profile",
        element: <Component lazy={React.lazy(() => import("@/Pages/Profile"))}/>
    },
];
