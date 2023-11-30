import React, { useEffect, useState } from 'react';
import styles from './ScrollButton.module.css';
import { ReactComponent as Arrowup } from '../assets/icons/arrow-up.svg';

const ScrollButton = () => {
	const [scrollUpButton, setScrollUpButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 700) {
				setScrollUpButton(true);
			} else {
				setScrollUpButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div>
			{scrollUpButton && (
				<button className={styles.buttonStyle} onClick={scrollToTop}>
					<Arrowup />
				</button>
			)}
		</div>
	);
};

export default ScrollButton;
