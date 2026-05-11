import { useState } from "react"
import axios from "axios"
import jsPDF from "jspdf"

function Apply() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [document, setDocument] = useState(null)

  const generatePDF = () => {

  const doc = new jsPDF()

  doc.setFontSize(22)

  doc.text(
    "E-Seva Application Receipt",
    20,
    20
  )

  doc.setFontSize(14)

  doc.text(`Name: ${name}`, 20, 50)

  doc.text(`Phone: ${phone}`, 20, 70)

  doc.text(`Service: ${service}`, 20, 90)

  doc.text(
    "Status: Pending",
    20,
    110
  )

  doc.save("receipt.pdf")

}

const handleSubmit = async (e) => {

  e.preventDefault()

  try {

    const formData = new FormData()

    formData.append("name", name)

    formData.append("phone", phone)

    formData.append("service", service)

    formData.append("document", document)

    const response = await axios.post(
      "https://e-seva-backend-iuw1.onrender.com/api/apply",
      formData
    )

    alert(response.data.message)
    generatePDF()

  } catch (error) {

    console.log(error)

    alert("Something went wrong")

  }

}

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[450px]"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Apply Service
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          className="w-full border p-3 rounded-lg mt-8"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          className="w-full border p-3 rounded-lg mt-4"
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={service}
          className="w-full border p-3 rounded-lg mt-4"
          onChange={(e) => setService(e.target.value)}
        >


          <option value="">
            Select Service
          </option>

          <option>Aadhaar Service</option>

          <option>PAN Card</option>

          <option>Ration Card</option>

          <option>Scholarship</option>

        </select>
        <input
            type="file"
            className="w-full border p-3 rounded-lg mt-4"
            onChange={(e) =>
              setDocument(e.target.files[0])
            }
          />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Submit Application
        </button>

      </form>

    </div>

  )
}

export default Apply