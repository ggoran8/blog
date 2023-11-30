import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ScrollButton from '../components/ScrollButton/ScrollButton.jsx';

const Layout = (props) => {
	return (
		<div className='container'>
			<Header />
			<main className='main'>{props.children}</main>
			<ScrollButton />
			<Footer />
		</div>
	);
};

export default Layout;
