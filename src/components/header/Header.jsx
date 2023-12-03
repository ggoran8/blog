import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className={styles.firstHeader}>
				<div className={styles.letterNav}>
					<div className={styles.borderLetterG}>
						<Link className={styles.letterG} to='/'>
							G
						</Link>
					</div>
				</div>
				<h1 className={styles.title}>
					<Link to='/'>Blog & Newsletter</Link>
				</h1>
			</div>
			<div>
				<nav>
					<ul className={styles.secondNav}>
						<li className={styles.listLink}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.listLink} ${styles.listLinkActive}`
										: styles.listLink
								}
								to='/'
							>
								Home
							</NavLink>
						</li>
						<li className={styles.listLink}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? `${styles.listLink} ${styles.listLinkActive}`
										: styles.listLink
								}
								to='/about'
							>
								About
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
