import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import TestComponent from './components/TestComponent';

import './index.css';

const ROOT = document.getElementById('root');

ReactDOM.render(
    <Router>
		<React.StrictMode>
			{/* <TestComponent /> */}
			<App />
		</React.StrictMode>
    </Router>,
	ROOT
);
