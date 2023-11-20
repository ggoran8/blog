import React, { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		console.log(`Searching for: ${searchQuery}`);
	};

	return (
		<form onSubmit={handleSearchSubmit}>
			<input
				type='text'
				placeholder='Search...'
				value={searchQuery}
				onChange={handleSearchInputChange}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
