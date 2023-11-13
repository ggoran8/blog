import React from 'react';
import Layout from '../../fragments/Layout';
import { Link } from 'react-router-dom';
import space from '../../components/assets/pictures/space.jpg';

const MainPage = () => {
	return (
		<Layout>
			<main>
				<section>
					<Link to='/footballworldcup'>
						<img src={space} alt='a' />
						Qatar 2022 FIFA World Cup: A Spectacle of Soccer in the Desert
					</Link>
				</section>
				<section>
					<Link to='/handballworldcup'>
						<img src={space} alt='a' />
						Egypt 2021 World Cup: A Showcase of Skill, Tenacity, and Global
						Sportsmanship
					</Link>
				</section>
				<article>
					<Link to='/lolworlds'>
						<img src={space} alt='a' />
						Rifts and Rivalries: The 2022 League of Legends World Championship
						Unveiled
					</Link>
				</article>
			</main>
		</Layout>
	);
};

export default MainPage;
