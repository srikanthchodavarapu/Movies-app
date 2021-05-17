import React from 'react';
import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = props => {
    return(
        <React.Fragment>
            <MainHeader>
                <h1 className="main-navigation__title">Movies.App</h1>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;