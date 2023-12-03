import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ScrollButton from '../components/ScrollButton/ScrollButton.jsx';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop.jsx';

const Layout = (props) => {
	return (
		<div className='container'>
			<ScrollToTop />
			<Header />
			<div className='mainContainer'>
				<main className='main'>{props.children}</main>
			</div>
			<ScrollButton />
			<Footer />
		</div>
	);
};

export default Layout;
