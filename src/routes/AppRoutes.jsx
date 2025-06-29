// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom';

import Header from '../layout/Header';
import Body from '../layout/Body';
import Footer from '../layout/Footer';

import HomePage from '../pages/homePage/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <Body />
                        <Footer />
                    </>
                }
            >
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
