import { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, getDocs } from 'firebase/firestore'
import { fbFirestore } from '../../../firebase/firebase'
import CategoryModel from '../../../models/categorymodel'

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') {
		res.status(405).json({ message: 'Method not allowed' })
	}

	try {
		let categories: CategoryModel[] = []
		const snapShot = await getDocs(collection(fbFirestore, 'categories'))

		if (!snapShot) {
			res.status(404).json({ message: 'No categories found' })
		}

		snapShot.forEach((doc) => {
			categories.push(doc.data() as CategoryModel)
		})

		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong', error })
	}
}

export default getCategories
