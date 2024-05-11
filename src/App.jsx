import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/noscript.css';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
