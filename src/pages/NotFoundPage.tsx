export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-900 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-4 text-lg">Page not found</p>
        <a
          href="/"
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

