import React, { useEffect, useState } from "react";
import useCartStore from "../../store/cartStore";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const cartItems = useCartStore((state) => state.cartItems);

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
    window.location.href = "/";
  };

  if (!user)
    return (
      <p className="text-center mt-10 text-lg text-red-600">
        No user found. Please login first.
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "profile"
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "orders"
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              My Orders
            </button>
            <button
              onClick={() => setActiveTab("offers")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "offers"
                  ? "bg-blue-100 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              My Offers
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 p-6">
          {activeTab === "profile" && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h2>
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mx-auto shadow mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mx-auto shadow mb-4">
                  No Photo
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handlePicUpload}
                className="mb-4 text-sm"
              />
              <div className="space-y-2 text-left mt-4 px-4">
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
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">No orders yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="border p-4 rounded shadow text-sm"
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "offers" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">My Offers</h2>
              <p className="text-gray-500">No offers available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
