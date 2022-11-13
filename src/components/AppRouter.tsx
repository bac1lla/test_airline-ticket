import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from "../routes";
import Avia from "../pages/Avia";

const AppRouter = () => {

    return (
        <Routes>
            {
                routes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )
            }
            <Route path='*' element={(<Avia/>)}/>
        </Routes>
    );
};

export default AppRouter;