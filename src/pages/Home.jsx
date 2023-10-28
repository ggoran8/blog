import React from 'react';
import Layout from '../fragments/Layout';
import { Link } from 'react-router-dom';
import space from '../components/assets/space.jpg';

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
			</main>
		</Layout>
	);
};

export default MainPage;
