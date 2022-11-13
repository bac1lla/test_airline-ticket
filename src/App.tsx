import React from 'react';
import AppRouter from "./components/AppRouter";
import {GlobalStyle} from "./styles/GlobalStyle";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
