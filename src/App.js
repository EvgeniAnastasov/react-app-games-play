import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';

function App() {
	return (
		<div id="box">

			<Header />

			{/* Main Content */}
			<main id="main-content">

				<Routes>

					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<Create />} />
					<Route path='/catalog' element={<Catalog />} />

				</Routes>

			</main>
			{/*Home Page*/}


		</div>

	);
}

export default App;
