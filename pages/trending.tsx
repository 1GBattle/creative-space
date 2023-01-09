import { NextPage } from 'next'
import styles from '../styles/Trending.module.css'
import NavBarComponent from '../Components/Nav/NavBarComponent'

const Trending: NextPage = () => {
	return (
		<div className={styles.page__container}>
			<NavBarComponent />

			<section className={styles.content__container}>
				<div className={styles.trending__categories}>
					<h1 className={styles.trending__categories__title}>
						Trending Categories
					</h1>
				</div>

				<div className={styles.trending__spaces}>
					<h1 className={styles.trending__spaces__title}>Trending Spaces</h1>
				</div>

				<div className={styles.trending__users}>
					<h1 className={styles.trending__users__title}>Trending Users</h1>
				</div>
			</section>
		</div>
	)
}

export default Trending
