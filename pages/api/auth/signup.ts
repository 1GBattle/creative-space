import {NextApiRequest, NextApiResponse} from "next"

const SignUp = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).json({message: 'Invalid request method'})
  }

  const {email, password} = req.body

  if (!email || !password) {
    res.status(400).json({message: 'An email and password is required'})
  }

  res.status(200).json({message: 'Success'})
}

export default SignUp