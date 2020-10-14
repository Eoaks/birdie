import React from 'react';

const Home = React.lazy(() => import('./components/Home.jsx'));
export default [
    {
        path: '/',
        exact: true,
        component: Home,
        key: 'home'
    }
]