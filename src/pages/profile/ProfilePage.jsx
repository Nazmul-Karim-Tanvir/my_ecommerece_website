import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find((u) => u.email === email);
    setUser(foundUser);

    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) setProfilePic(savedPic);
  }, []);

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/"; // or navigate('/')
  };

  if (!user)
    return <p className="text-center mt-10">No user found. Please login first.</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>

        <div className="mb-4">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mx-auto shadow"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mx-auto shadow">
              No Photo
            </div>
          )}
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Profile Picture
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePicUpload}
          className="mb-6 text-sm text-gray-600"
        />

        <div className="text-left space-y-2 mb-4">
          <p>
            <span className="font-semibold">Full Name:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> Not set
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
