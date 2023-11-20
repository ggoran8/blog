import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className={styles.firstHeader}>
				<div className={styles.letterG}>
					<div className={styles.borderG}>G</div>
				</div>
				<h1 className={styles.title}>
					<Link to='/'>Blog & Newsletter</Link>
				</h1>
				<nav className={styles.firstNav}>
					<ul className={styles.navList}>
						<li>Search</li>
						<li>Subscribe</li>
						<li>Sign in</li>
					</ul>
				</nav>
			</div>

			<div>
				<nav>
					<ul className={styles.secondNav}>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
