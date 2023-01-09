import { NextApiRequest, NextApiResponse } from 'next'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { fbAuth, fbFirestore, fbStorage } from '../../../firebase/firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { doc, setDoc } from '@firebase/firestore'
import { createAvatar } from '@dicebear/core'
import { avataaars } from '@dicebear/collection'
import avatarFile from '../../../avatar.svg'

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		res.status(400).json({ message: 'Invalid request method' })
	}

	const { email, password, username } = req.body

	if (!email || !password) {
		res.status(400).json({ message: 'A required field is missing' })
	}

	if (!email.includes('@')) {
		res.status(400).json({ message: 'Invalid email' })
	}

	if (password.length < 8) {
		res.status(400).json({ message: 'Password must be at least 8 characters' })
	}

	const user = await createUserWithEmailAndPassword(fbAuth, email, password)
		.then((userCredentials) => {
			const user = {
				userName: 'Some random name',
				email: userCredentials.user.email,
				uid: userCredentials.user.uid,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			}
			//`
			// const avatar = createAvatar(avataaars, {
			// 	seed: user.userName
			// }).toFile('avatar.svg')
			//
			// const avatarRef = ref(fbStorage, `${user.uid}/avatar.svg`)
			// uploadBytes(avatarRef, avatarFile)

			setDoc(doc(fbFirestore, 'users', user.uid), user)

			return user
		})
		.catch((error) => {
			res.status(400).json({ 'An error occurred': error })
		})

	res.status(200).json({ user })
}

export default SignUp
