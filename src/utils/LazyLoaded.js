import React from "react";

export const Home = React.lazy(() => import('../containers/Home/Home'));
export const Login = React.lazy(() => import('../containers/Login/Login'));
export const Genres = React.lazy(() => import('../containers/Genres/index.js'));
export const Subgenres = React.lazy(() => import('../containers/Subgenres/index.js'));
export const AddNew = React.lazy(() => import('../containers/AddNew/index.js'));
export const NotFound = React.lazy(() => import('../components/NotFound/NotFound'));
