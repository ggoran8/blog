import React from 'react';
import Layout from '../../fragments/Layout';
import { Link } from 'react-router-dom';
import styles from './FrontPage.module.css';
import { football, handball, lolworlds } from '..';

const MainPage = () => {
	return (
		<Layout>
			<div className={styles.mainPage}>
				<section className={styles.mobileRemoved}>
					<div>
						<Link to='/footballworldcup'>
							<img className={styles.mainLeftImage} src={football} alt='a' />
							<p className={styles.mainPageTitleParagraph}>
								Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
								the Desert
							</p>
						</Link>
					</div>
					<div>
						<Link to='/handballworldcup'>
							<img className={styles.mainLeftImage} src={handball} alt='a' />
							<p className={styles.mainPageTitleParagraph}>
								Egypt Handball 2021 World Cup: A Showcase of Skill, Tenacity,
								and Global Sportsmanship
							</p>
						</Link>
					</div>
					<div>
						<Link to='/lolworlds'>
							<img className={styles.mainLeftImage} src={lolworlds} alt='a' />
							<p className={styles.mainPageTitleParagraph}>
								Rifts and Rivalries: The 2022 League of Legends World
								Championship Unveiled
							</p>
						</Link>
					</div>
				</section>
				<section className={styles.secondSection}>
					<div>
						<Link to='/footballworldcup'>
							<img className={styles.testImage} src={football} alt='a' />
							<p className={styles.mainBlogPage}>
								Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
								the Desert
								<p className={styles.mainPageParagraph}>
									The FIFA World Cup, the pinnacle of international soccer, is
									set to captivate the world once again, this time in the
									mystical sands of Qatar. In 2022, the beautiful game will come
									alive in a unique setting, where tradition and modernity
									harmoniously collide. Join us on a journey to explore the
									magic that awaits in the upcoming FIFA World Cup.
								</p>
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
								<p className={styles.mainPageTitleParagraph}>
									Qatar Football 2022 FIFA World Cup: A Spectacle of Football in
									the Desert
									<br />
									<span>
										Learn more about the football World Cup held in Qatar 2022!
									</span>
								</p>
								<img className={styles.imageRightSide} src={football} alt='a' />
							</div>
						</Link>
					</div>
					<div className={styles.testDiv}>
						<Link to='/handballworldcup'>
							<div className={styles.annoying}>
								<p className={styles.mainPageTitleParagraph}>
									Egypt Handball 2021 World Cup: A Showcase of Skill, Tenacity,
									and Global Sportsmanship
									<br />
									<span>
										Learn more about the handball World Cup held in Egypt 2022!
									</span>
								</p>
								<img className={styles.imageRightSide} src={handball} alt='a' />
							</div>
						</Link>
					</div>
					<div className={styles.testDiv}>
						<Link to='/lolworlds'>
							<div className={styles.annoying}>
								<p className={styles.mainPageTitleParagraph}>
									Rifts and Rivalries: The 2022 League of Legends World
									Championship Unveiled
									<br />
									<span>
										Learn more about the League of Legends World Championship of
										2022!
									</span>
								</p>
								<img
									className={styles.imageRightSide}
									src={lolworlds}
									alt='a'
								/>
							</div>
						</Link>
					</div>
				</div>
				<div>
					<div className={styles.letterNav}>
						<div className={styles.borderLetterG}>
							<div className={styles.letterG}>G</div>
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
