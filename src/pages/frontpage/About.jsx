import React from 'react';
import Layout from '../../fragments/Layout';
import styles from './FrontPage.module.css';

const About = () => {
	return (
		<Layout>
			<div className={styles.aboutPage}>
				<h1 className={styles.aboutPageH1}>Welcome to My blog!</h1>
				<div className={styles.aboutPageParagraph}>
					<p className={styles.aboutPageParagraph}>
						Are you a die-hard sports enthusiast, or perhaps you're just dipping
						your toes into the exciting world of athletics? Look no further!
					</p>
					<p className={styles.aboutPageParagraph}>
						My blog is your go-to destination for all things sports-related.
						From in-depth analyses of your favorite teams and players to the
						latest updates on major sporting events, we've got you covered.
					</p>
					<p className={styles.aboutPageParagraph}>
						Join us on a journey through the exhilarating realm of sports, where
						passion and fandom converge to celebrate the games we love.
					</p>
					<p className={styles.aboutPageParagraph}>
						Whether you're a fan of soccer, basketball, football, or any other
						sport, our blog is your ultimate source for news, insights, and the
						thrill of the game.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default About;
