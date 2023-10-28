import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, FootballWorldCup, About } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/footballworldcup' element={<FootballWorldCup />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
}

export default App;
