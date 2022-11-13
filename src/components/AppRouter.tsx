import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from "../routes";
import {Navigate} from "react-router-dom";
import {AVIA_ROUTE} from "../utils/consts";

const AppRouter = () => {

    return (
        <Routes>
            {
                routes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )
            }
            <Route path='*' element={<Navigate to={AVIA_ROUTE} replace/>}/>
        </Routes>
    );
};

export default AppRouter;