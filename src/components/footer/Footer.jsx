import React from 'react';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<nav>
				<h3>My contacts!</h3>
				<a href='mailto: gorangajsek22@gmail.com'>
					<Mail />
				</a>
				<a href='https://twitter.com/'>
					<Twitter />
				</a>
				<a href='https://www.instagram.com/'>
					<Instagram />
				</a>
				<small>2023 Goran</small>
			</nav>
		</footer>
	);
};

export default Footer;
