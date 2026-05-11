import { useEffect, useState } from "react"
import axios from "axios"

function Admin() {

  const [applications, setApplications] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetchApplications()

  }, [])

  const fetchApplications = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/applications"
      )

      setApplications(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  const deleteApplication = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/applications/${id}`
      )

      alert("Application Deleted")

      fetchApplications()

    } catch (error) {

      console.log(error)

    }

  }

  const filteredApplications =
  applications.filter((app) => {

    return (

      app.name
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      app.service
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      app.phone.includes(search)

    )

  })

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Admin Panel 🚀
      </h1>
      <input
        type="text"
        placeholder="Search by name, phone or service..."
        className="w-full p-4 rounded-xl border mb-8"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-6">

        {filteredApplications.map((app) => (

          <div
            key={app._id}
            className="bg-white p-6 rounded-2xl shadow-md"
          >

            <h2 className="text-2xl font-bold text-gray-800">
              {app.name}
            </h2>

            <p className="mt-2 text-gray-600">
              Phone: {app.phone}
            </p>

            <p className="mt-2 text-blue-600 font-semibold">
              Service: {app.service}
            </p>
            <p className="mt-2 font-bold text-green-600">
              Status: {app.status}
            </p>
            <a
              href={`http://localhost:5000/uploads/${app.document}`}
              target="_blank"
              className="text-blue-600 underline block mt-2"
            >
              View Document
            </a>

            <div className="flex gap-4 mt-4">

            <button
              onClick={() =>
                updateStatus(app._id, "Approved")
              }
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Approve
            </button>

            <button
              onClick={() =>
                updateStatus(app._id, "Rejected")
              }
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Reject
            </button>

          </div>
            <button
              onClick={() => deleteApplication(app._id)}
              className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

const updateStatus = async (id, status) => {

  try {

    await axios.put(
      `http://localhost:5000/api/applications/${id}`,
      { status }
    )

    fetchApplications()

  } catch (error) {

    console.log(error)

  }

}

export default Admin