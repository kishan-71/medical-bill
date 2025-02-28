import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormChange = (form) => {
    setActiveForm(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error */}
      <div className="w-full max-w-md mx-auto mt-5 p-6 bg-gray-800 rounded-lg shadow-md">
        {/* Common error display */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              {isLoading ? "Loading..." : "Login"}
            </button>
            <div className="text-center">
              <button onClick={() => handleFormChange("forgotPassword")} className="text-blue-500 hover:underline">
                Forgot Password?
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-300">
                Don't have an account?{" "}
                <button onClick={() => handleFormChange("register")} className="text-blue-500 hover:underline">
                  Register
                </button>
              </p>
            </div>
          </form>
      </div>
    </div>
  );
};

export default LoginPage;
