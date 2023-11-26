import React from 'react';
import Layout from '../../fragments/Layout';
import { Link } from 'react-router-dom';
import space from '../../components/assets/pictures/space.jpg';
import styles from './FrontPage.module.css';

const MainPage = () => {
	return (
		<Layout>
			<div className={styles.mainPage}>
				<section className={styles.firstSection}>
					<Link to='/footballworldcup'>
						<img src={space} alt='a' />
						<p>
							Qatar 2022 FIFA World Cup: A Spectacle of Soccer in the Desert
						</p>
					</Link>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						<p>
							Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
							Sportsmanship
						</p>
					</Link>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						<p>
							Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
							Sportsmanship
						</p>
					</Link>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						<p>
							Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
							Sportsmanship
						</p>
					</Link>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						<p>
							Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
							Sportsmanship
						</p>
					</Link>
				</section>
				<section className={styles.secondSection}>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						<p>
							Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
							Sportsmanship
						</p>
					</Link>
				</section>
				<article className={styles.thirdSection}>
					<Link to='/lolworlds'>
						<img src={space} alt='a' />
						<p>
							Rifts and Rivalries: The 2022 League of Legends World Championship
							Unveiled
						</p>
					</Link>
				</article>
			</div>
		</Layout>
	);
};

export default MainPage;
