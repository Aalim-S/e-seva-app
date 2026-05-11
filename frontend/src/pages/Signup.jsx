import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Account Created Successfully 🚀")

    } catch (error) {

      alert(error.message)

    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Signup
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border mt-8 p-3 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border mt-4 p-3 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Create Account
        </button>

      </div>

    </div>
  )
}

export default Signup