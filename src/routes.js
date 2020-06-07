import React from 'react';

const Home = React.lazy(() => import('./components/Home.jsx'));
export default [
    {
        exact: true,
        component: Home,
        key: 'home'
    }
]