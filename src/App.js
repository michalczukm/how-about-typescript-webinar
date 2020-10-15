import React from 'react';
import { Todos } from './components/Todos';

const Header = () => (
    <>
        <h1>🗒 Classic TODO list</h1>
    </>
);

export const App = () => {
    return (
        <>
            <Header />
            <Todos />
        </>
    );
};
