import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate, Link } from "react-router-dom"

function Dashboard() {

  const navigate = useNavigate()

  const handleLogout = async () => {

    await signOut(auth)

    navigate("/login")
  }

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-blue-600 text-white p-5 flex justify-between">

        <h1 className="text-2xl font-bold">
          User Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Content */}
      <div className="p-10">

        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to E-Seva Dashboard 🚀
        </h2>

        <p className="mt-5 text-gray-600">
          Here users can apply for services,
          upload documents and track status.
        </p>

        <Link to="/apply">

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">

            Apply For Service

          </button>

        </Link>

      </div>

    </div>

  )
}

export default Dashboard