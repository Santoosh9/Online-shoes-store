// PasswordResetForm.js

import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();

    // TODO: Implement password reset logic here

    // For demonstration purposes, let's just show a success message
    setMessage('Password reset instructions sent to your email.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {message && (
            <div className="mb-4 text-green-600">
              <p>{message}</p>
            </div>
          )}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
