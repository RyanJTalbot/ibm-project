import React from 'react';
import './App.css';

import Home from './pages/Home';
// // import Photography from './pages/Photography';
// // import Contact from './pages/Contact';
// import Error from './pages/Error';

// import { Routes, Route } from 'react-router-dom';
// // import { Route, Switch } from 'react-router-dom';

// import Navbar from './components/Navbar';

function App() {
	return (
		// <>
		// 	<Navbar />
		// 	<Routes>
		// 		<Route exact path='/' element={<Home />} />

		// 		{/* <Route exact path='/photography' component={Photography} />
		// 		<Route exact path='/contact' component={Contact} /> */}
		// 		<Route component={<Error />} />
		// 	</Routes>
		// </>

		<Home />
	);
}
export default App;
