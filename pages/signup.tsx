import React from 'react'
import styles from '../styles/SignUpPage.module.css'
import Image from 'next/image'

import siteLogo from '../public/images/site__logo.png'
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
					formHeading={'Welcome to Creative Space!'}
					formSubHeading={
						'Create an account to create posts and leave comments'
					}
					formLinkMsg={'Already have an account? Click'}
					formType={'signup'}
				/>
			</div>
		</div>
	)
}

export default Login
