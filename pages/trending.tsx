import { NextPage } from 'next'
import styles from '../styles/Trending.module.css'
import NavBarComponent from '../Components/Nav/NavBarComponent'
import { faker } from '@faker-js/faker'
import Image from 'next/image'

const Trending: NextPage = () => {
	const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const testArr2 = [1, 2, 3, 4]
	const users: any[] = []

	const makefakeUsers = () => {
		for (let i = 0; i < 4; i++) {
			users.push({
				avatarUrl: faker.image.avatar(),
				name: faker.internet.userName()
			})
		}
	}

	makefakeUsers()
	console.log(users)
	return (
		<div className={styles.page__container}>
			<section className={styles.content__container}>
				<h1 className={styles.trending__title}>Trending Users</h1>
				<div className={styles.trending__users}>
					<div className={`${styles.trending__cards} grid-4`}>
						{users.map((user) => (
							<div
								key={Math.random() * 1000}
								className={`card ${styles.users__card}`}
							>
								<div className={styles.users__card__image}>
									<Image
										src={user.avatarUrl}
										className={styles.users__card__image}
										alt={user.name}
										width={200}
										height={200}
									/>
								</div>

								<h2 className={styles.users__card__name}>{user.name}</h2>
							</div>
						))}
					</div>
				</div>

				<h1 className={styles.trending__title}>Trending Spaces</h1>
				<div className={styles.trending__spaces}>
					<div className={`${styles.trending__cards} grid-6 `}>
						{testArr.map((item) => (
							<div key={item} className={`card ${styles.card}`}></div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Trending
