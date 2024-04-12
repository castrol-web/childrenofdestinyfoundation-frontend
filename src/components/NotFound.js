import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-64 h-64 mb-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 3m0 0l3-3m-3 3v8a2 2 0 002 2h10a2 2 0 002-2V9l-3-3m0 0l-3 3m3-3L6 6m10 2v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h4a2 2 0 012 2z"
          />
        </svg>
        <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
