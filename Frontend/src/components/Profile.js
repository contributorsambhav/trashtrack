import React from 'react';

function ProfilePage({ user }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Profile</h2>
        {/* <div className="flex items-center justify-center mb-6">
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-20 h-20 rounded-full" />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Username:</label>
          <p className="text-gray-800">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <p className="text-gray-800">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone:</label>
          <p className="text-gray-800">{user.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Profession:</label>
          <p className="text-gray-800">{user.profession}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password:</label>
          {/* Avoid rendering password in plain text */}
          <p className="text-gray-800">******</p>
        </div>
        
        
        {/* <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">Edit Profile</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">Delete Account</button>
        </div> */}
      </div>
    </div>
  );
}

export default ProfilePage;
