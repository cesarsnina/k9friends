import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import TestComponent from './components/TestComponent';

const ROOT = document.getElementById('root');

ReactDOM.render(
    <Router>
		<React.StrictMode>
			<TestComponent />
			{/* <App /> */}
		</React.StrictMode>
    </Router>,
	ROOT
);
