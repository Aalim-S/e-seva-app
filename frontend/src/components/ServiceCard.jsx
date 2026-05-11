function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      
      <h2 className="text-2xl font-bold text-blue-600">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>

    </div>
  )
}

export default ServiceCard