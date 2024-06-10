import Menu from './components/Menu';
import ContentBg from './components/ContentBg/ContentBg';
import Voting from './components/Voting';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery/Gallery';
import CurrentBreed from './pages/CurrentBreed';
import Layout from './layout';

import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<ContentBg />} />
						<Route path='/voting' element={<Voting />} />
						<Route path='/breeds' element={<Breeds />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/breeds/:name' element={<CurrentBreed />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
