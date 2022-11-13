import {AVIA_INFO_ROUTE, AVIA_ROUTE} from "./utils/consts";
import {FC, ReactComponentElement} from "react";
import Avia from "./pages/Avia";
import Info from "./pages/Info";

interface IRoute {
    path: string,
    Component: ReactComponentElement<FC>
}

export const routes: IRoute[] = [
    {
        path: AVIA_ROUTE,
        Component: <Avia/>
    },
    {
        path: AVIA_INFO_ROUTE,
        Component: <Info/>
    }
]