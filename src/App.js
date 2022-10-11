import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div id="box">

			<Header />

			{/* Main Content */}
			<main id="main-content">

				<Routes>

					<Route path='/' element={<Home />} />

				</Routes>

			</main>
			{/*Home Page*/}


		</div>

	);
}

export default App;
