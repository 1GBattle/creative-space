import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/SingleCategory.module.css'

const Category: NextPage = () => {
	const router = useRouter()
	const { categoryName } = router.query

	return (
		<div className={styles.container}>
			<h1 className={styles.category__name}>{categoryName}</h1>
		</div>
	)
}

export default Category
