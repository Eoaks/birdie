import React from 'react';

const Home = React.lazy(() => import('./containers/HomeContainer.jsx'));
export default [
    {
        path: '/',
        exact: true,
        component: Home,
        key: 'home'
    }
]