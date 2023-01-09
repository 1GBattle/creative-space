import React from 'react'
import styles from '../../styles/CategoryCardComponent.module.css'

interface Props {
	backgroundImgUrl: string
	categoryTitle: string
}

const CategoryCardComponent: React.FunctionComponent<Props> = ({
	backgroundImgUrl,
	categoryTitle
}) => {
	return (
		<div className={styles.container}>
			<div
				className={`box__shadow card ${styles.card}`}
				style={
					backgroundImgUrl
						? { backgroundImage: `url('${backgroundImgUrl}')` }
						: { backgroundRepeat: 'no-repeat' }
				}
			>
				<h1 className={`${styles.category__title}`}>{categoryTitle}</h1>
			</div>
		</div>
	)
}

export default CategoryCardComponent
