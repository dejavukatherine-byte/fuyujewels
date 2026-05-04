import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#143c69] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block bg-[#143c69] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
