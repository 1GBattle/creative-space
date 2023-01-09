import React from 'react'
import styles from '../../styles/NavBarComponent.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logout } from '../../redux/user/userSlice'

const NavBarComponent: React.FunctionComponent = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.userSlice.user)
	const handleLogout = () => {
		dispatch(logout())
		router.push('/login')
	}
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Creative Space</h1>

			<div className={styles.utils__container}>
				<input
					className={`form__group box__shadow ${styles.search__input}`}
					type='text'
					placeholder='Search spaces'
				/>

				<div className={styles.nav__links__container}>
					<div className={styles.nav__link__container}>
						<Link className={styles.nav__link} href={'/categories'}>
							<Image
								className={styles.trending__icon}
								src={'/images/categories__icon.png'}
								alt={'categories logo'}
								width={24}
								height={24}
							/>
						</Link>
						<Link href={'/categories'} className={styles.nav__link__text}>
							Categories
						</Link>
					</div>

					<div className={styles.nav__link__container}>
						<Link className={styles.nav__link} href={'/trending'}>
							<Image
								className={styles.trending__icon}
								src={'/images/trending__icon.png'}
								alt={'categories.tsx logo'}
								width={24}
								height={24}
							/>
						</Link>
						<Link href={'/trending'} className={styles.nav__link__text}>
							Trending
						</Link>
					</div>

					<div
						className={styles.nav__link__container}
						onClick={() => handleLogout()}
					>
						{user ? (
							<>
								<Link className={styles.nav__link} href={'/login'}>
									<Image
										className={styles.trending__icon}
										src={'/images/logout__icon.png'}
										alt={'categories logo'}
										width={24}
										height={24}
									/>
								</Link>
								<h3 className={styles.nav__link__text}>Logout</h3>
							</>
						) : (
							<>
								<Link className={styles.nav__link} href={'/login'}>
									<Image
										className={styles.trending__icon}
										src={'/images/logout__icon.png'}
										alt={'categories logo'}
										width={24}
										height={24}
									/>
								</Link>
								<h3 className={styles.nav__link__text}>Login</h3>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBarComponent
