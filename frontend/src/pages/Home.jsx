import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-blue-600 text-white p-5 flex justify-between">
        <h1 className="text-2xl font-bold">
          E-Seva Online Center
        </h1>

        <Link to="/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
                Login
            </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-5">

        <h2 className="text-5xl font-bold text-gray-800">
          Online Government Services
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl">
          Apply for Aadhaar, PAN Card, Ration Card,
          Certificates, Scholarships and more.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700">
          Explore Services
        </button>

      </div>

      {/* Services Section */}
      <div className="mt-24 px-10 pb-20">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <ServiceCard
            title="Aadhaar Services"
            description="Apply and update Aadhaar related services."
          />

          <ServiceCard
            title="PAN Card"
            description="New PAN card application and correction."
          />

          <ServiceCard
            title="Ration Card"
            description="Apply for new ration card services."
          />

          <ServiceCard
            title="Scholarship"
            description="Government scholarship application support."
          />

          <ServiceCard
            title="Income Certificate"
            description="Apply for income and caste certificates."
          />

          <ServiceCard
            title="Job Applications"
            description="Government and private job form assistance."
          />

        </div>

      </div>

    </div>
  )
}

export default Home