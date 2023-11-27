import React from 'react';
import Layout from '../../fragments/Layout';
import { Link } from 'react-router-dom';
import space from '../../components/assets/pictures/space.jpg';
import styles from './FrontPage.module.css';

const MainPage = () => {
	return (
		<Layout>
			<div className={styles.mainPage}>
				<section>
					<div>
						<Link to='/footballworldcup'>
							<img className={styles.mainLeftImage} src={space} alt='a' />
							<p>
								Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
								the Desert
							</p>
						</Link>
					</div>
					<div>
						<Link to='/handballworldcup'>
							<img className={styles.mainLeftImage} src={space} alt='a' />
							<p>
								Egypt Handball 2021 World Cup: A Showcase of Skill, Tenacity,
								and Global Sportsmanship
							</p>
						</Link>
					</div>
					<div>
						<Link to='/lolworlds'>
							<img className={styles.mainLeftImage} src={space} alt='a' />
							<p>
								Rifts and Rivalries: The 2022 League of Legends World
								Championship Unveiled
							</p>
						</Link>
					</div>
				</section>
				<section className={styles.secondSection}>
					<div>
						<Link to='/footballworldcup'>
							<img className={styles.testImage} src={space} alt='a' />
							<p className={styles.mainBlogPage}>
								Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
								the Desert
							</p>
						</Link>
					</div>
				</section>
			</div>
			<article className={styles.mainPageSecondPart}>
				<div>
					<p className={styles.articleParagraph}>New</p>
					<div className={styles.testDiv}>
						<Link to='/footballworldcup'>
							<div className={styles.annoying}>
								<p>
									Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
									the Desert
									<br />
									<span>
										Learn more about the football World Cup held in Qatar 2022!
									</span>
								</p>
								<img className={styles.imageRightSide} src={space} alt='a' />
							</div>
						</Link>
					</div>
					<div className={styles.testDiv}>
						<Link to='/handballworldcup'>
							<div className={styles.annoying}>
								<p>
									Egypt Handball 2021 World Cup: A Showcase of Skill, Tenacity,
									and Global Sportsmanship
									<br />
									<span>
										Learn more about the handball World Cup held in Egypt 2022!
									</span>
								</p>
								<img className={styles.imageRightSide} src={space} alt='a' />
							</div>
						</Link>
					</div>
					<div className={styles.testDiv}>
						<Link to='/lolworlds'>
							<div className={styles.annoying}>
								<p>
									Rifts and Rivalries: The 2022 League of Legends World
									Championship Unveiled
									<br />
									<span>
										Learn more about the League of Legends World Championship of
										2022!
									</span>
								</p>
								<img className={styles.imageRightSide} src={space} alt='a' />
							</div>
						</Link>
					</div>
				</div>
				<div>
					<div className={styles.letterNav}>
						<div className={styles.borderLetterG}>
							<Link className={styles.letterG} to='/'>
								G
							</Link>
						</div>
					</div>
					<p className={styles.secondPartParagraph}>
						Welcome to my Blog & Newsletter! I will write about sports news and
						all sorts of things here so keep your eye for new blog posts!
					</p>
				</div>
			</article>
		</Layout>
	);
};

export default MainPage;
