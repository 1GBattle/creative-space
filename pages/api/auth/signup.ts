import {NextApiRequest, NextApiResponse} from "next"
import {createUserWithEmailAndPassword} from "@firebase/auth"
import { fbAuth } from "../../../firebase/firebase"

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).json({message: 'Invalid request method'})
  }

  const {email, password, username} = req.body

  if (!email || !password ) {
    res.status(400).json({message: 'A required field is missing'})
  }

  if (!email.includes('@')) {
    res.status(400).json({message: 'Invalid email'})
  }

  if (password.length < 8){
    res.status(400).json({message: 'Password must be at least 8 characters'})
  }

  const user = await createUserWithEmailAndPassword(fbAuth, email, password).then(userCredentials => {
    res.status(200).json(user)
  }).catch (error => {
    res.status(400).json({'An error occurred': error})
  })
}

export default SignUp