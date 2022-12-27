import React from 'react';
import {hot} from 'react-hot-loader/root';
import {useRoutes} from "react-router-dom";
import {routes} from "@/routes";
import BaseLayout from "@/Layouts/BaseLayout";

function App() {
    const element = useRoutes(routes);
    return (
        <BaseLayout>
            { element }
        </BaseLayout>
    );
}

export default hot(App);
