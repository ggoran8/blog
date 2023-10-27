import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, WorldCup, About } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/worldcup' element={<WorldCup />} />
			<Route path='/about' element={<About />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
}

export default App;
