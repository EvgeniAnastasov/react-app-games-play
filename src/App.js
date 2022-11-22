import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import { useEffect, useState } from 'react';
import * as gameService from './services/gameService'
import { AuthContext } from './context/AuthContext';
import { GameContext } from './context/GameContext'

import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { EditGame } from './components/EditGame/EditGame';
import { Catalog } from './components/Catalog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

	const [games, setGames] = useState([]);
	const [auth, setAuth] = useLocalStorage('auth', {});
	const navigate = useNavigate();

	const userLogin = (authData) => {
		setAuth(authData)
	}

	const userLogout = () => {
		setAuth({});
	}

	const addComment = (gameId, comment) => {
		setGames(state => {
			const game = state.find(x => x._id === gameId);

			const comments = game.comments || [];
			comments.push(comment)

			return [
				...state.filter(x => x._id !== gameId),
				{ ...game, comments },
			];
		})
	}

	const gameAdd = (gameData) => {
		setGames(state => [
			...state,
			// console.log(gameData),
			gameData,
		]);

		navigate(`/catalog`)
	};

	const gameEdit = (gameId, gameData) => {
		setGames(state => state.map(x => x._id === gameId ? gameData : x));
	}


	useEffect(() => {
		gameService.getAll()
			.then(result => { setGames(result) })
	}, [])



	return (

		<AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
			<div id="box">

				<Header />

				{/* Main Content */}

				<GameContext.Provider value={{ games, gameAdd, gameEdit }}>

					<main id="main-content">

						<Routes>

							<Route path='/' element={<Home games={games} />} />
							<Route path='/login' element={<Login />} />
							<Route path='/logout' element={<Logout />} />
							<Route path='/register' element={<Register />} />
							<Route path='/create' element={<CreateGame />} />
							<Route path='/games/:gameId/edit' element={<EditGame />} />
							<Route path='/catalog' element={<Catalog games={games} />} />
							<Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />

						</Routes>

					</main>
				</GameContext.Provider>
				Home Page


			</div>
		</AuthContext.Provider>
	);
}

export default App;
