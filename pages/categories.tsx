import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import NavBarComponent from '../Components/Nav/NavBarComponent'
import styles from '../styles/Categories.module.css'
import CategoryCard from '../Components/Categories/CategoryCardComponent'
import CategoryModel from '../models/categorymodel'
import { collection, getDocs } from 'firebase/firestore'
import { fbFirestore } from '../firebase/firebase'

export const getStaticProps = async () => {
	const categories: CategoryModel[] = []
	const snapShop = await getDocs(collection(fbFirestore, 'categories'))

	snapShop.forEach((doc) => categories.push(doc.data() as CategoryModel))

	return {
		props: {
			categories
		}
	}
}

interface Props {
	categories: CategoryModel[]
}

const Categories: NextPage<Props> = ({ categories }) => {
	const [sortBy, setSortBy] = useState<string>('popularity')
	const sortByOptions = ['popularity', 'aToZ', 'zToA']

	useEffect(() => {
		sortBy === 'aToZ'
			? categories.sort((a, b) => (a.categoryTitle < b.categoryTitle ? 1 : -1))
			: categories.sort((a, b) => (a.categoryTitle > b.categoryTitle ? 1 : -1))
	}, [sortBy, categories])

	return (
		<div className={styles.container}>
			<NavBarComponent />

			<div className={styles.heading__container}>
				<h1 className={styles.categories__title}>Categories</h1>

				<div className={styles.dropDown__container}>
					<label className={styles.dropDown__label}>Sort By:</label>
					<select
						className={styles.dropDown}
						onChange={(e) => setSortBy(e.target.value)}
					>
						{sortByOptions.map((option, index) => (
							<option key={index}>{option}</option>
						))}
					</select>
				</div>
			</div>
			<section className={styles.category__cards}>
				{categories.map((category: CategoryModel) => (
					<CategoryCard
						key={Math.random() * 1000}
						backgroundImgUrl={category.backgroundImgUrl}
						categoryTitle={category.categoryTitle}
					/>
				))}
			</section>
		</div>
	)
}

export default Categories
