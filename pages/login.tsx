import React from 'react'
import styles from '../styles/LoginPage.module.css'
import Image from 'next/image'
import LoginSignUpForm from '../Components/LoginSignUpForm/LoginSignupFrom'
import { NextPage } from 'next'

const Login: NextPage = () => {
	return (
		<div className={styles.page__container}>
			<div className={styles.page__heading__container}>
				<Image
					src={'/images/site__logo.png'}
					alt={'site logo'}
					width={64}
					height={64}
				/>

				<h1 className={styles.page__heading}>Creative Space</h1>
			</div>
			<div className={styles.form__container}>
				<LoginSignUpForm
					formHeading={'Welcome back!'}
					formSubHeading={'Login to create posts and leave comments'}
					formLinkMsg={'New here? Click'}
					formType={'login'}
				/>
			</div>
		</div>
	)
}

export default Login
