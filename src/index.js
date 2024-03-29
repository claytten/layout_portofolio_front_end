import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from 'view/landingpage/LandingPage.jsx';
import * as serviceWorker from './serviceWorker';

import "assets/scss/material-kit-react.css?v=1.3.0";

ReactDOM.render(<LandingPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
