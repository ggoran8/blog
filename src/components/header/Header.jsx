import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<h1>
				<Link to='/'>Blog & Newsletter</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
