import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TicketStore from "./store/TicketStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const Context = createContext({
    ticket: new TicketStore()
})

root.render(
    <React.StrictMode>
        <Context.Provider value={{ticket: new TicketStore()}}/>
        <App/>
    </React.StrictMode>
);
