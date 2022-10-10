import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
	return (
		<div id="box">

			<Header/>

			{/* Main Content */}
			<main id="main-content">
				<Home/>
			</main>
			{/*Home Page*/}


		</div>

	);
}

export default App;
