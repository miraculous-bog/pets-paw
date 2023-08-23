import Menu from './components/Menu';
import ContentBg from './components/ContentBg/ContentBg';
import Voting from './components/Voting';
import Breeds from './components/Breeds';
import Gallery from './components/Gallery';
import CurrentBreed from './components/CurrentBreed';

import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Menu />
				<Routes>
					<Route path='/' element={<ContentBg />} />
					<Route path='/voting' element={<Voting />} />
					<Route path='/breeds' element={<Breeds />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/breeds/:name' element={<CurrentBreed />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
