import { NextApiRequest, NextApiResponse } from "next"
import { fbAuth } from "../../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" })
  }

  try {
    const user = await signInWithEmailAndPassword(fbAuth, email, password).then((userCredential) => {
      return userCredential.user
    })

    return res.status(200).json({ user })
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error })
  }
}

export default Login