import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-1 justify-center items-center text-pure-greys-300 text-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="mb-4">We couldn't find the page you're looking for.</p>
        <p>It might have been moved or deleted.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
