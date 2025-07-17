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
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "profile"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "orders"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              My Orders
            </button>
            <button
              onClick={() => setActiveTab("offers")}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === "offers"
                ? "bg-blue-100 font-semibold"
                : "hover:bg-gray-100"
                }`}
            >
              My Offers
            </button>
          </div>
          {/* Logout button at bottom of sidebar */}
          <button
            onClick={handleLogout}
            className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* Content area */}
        <div className="w-full md:w-3/4 p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-300 p-8">
              <h2 className="text-xl font-extrabold mb-6 text-gray-900 text-center">User Profile</h2>
              <div className="text-center mb-6">
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

                <label
                  htmlFor="profilePicInput"
                  className="cursor-pointer inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold
               hover:bg-indigo-700 transition select-none"
                >
                  Upload Profile Picture
                </label>
                <input
                  id="profilePicInput"
                  type="file"
                  accept="image/*"
                  onChange={handlePicUpload}
                  className="hidden"
                />
              </div>


              <div className="space-y-4 text-left text-gray-700">
                <div>
                  <p className="text-lg font-medium"><span className="font-semibold pr-2">Name:</span>{user.name}</p>
                </div>
                <div>
                  <p className="text-lg font-medium"><span className="font-semibold pr-2">Email:</span>{user.email}</p>
                </div>
                <div>
                  <p className="text-lg font-medium"><span className="font-semibold pr-2">Contact:</span> Not set</p>
                </div>
              </div>
            </div>
          )}


          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">My Orders</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">No orders yet.</p>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="hidden sm:block border rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 font-medium text-left">Product</th>
                          <th className="p-4 font-medium text-left">Quantity</th>
                          <th className="p-4 font-medium text-left">Price</th>
                          <th className="p-4 font-medium text-left">Subtotal</th>
                          <th className="p-4 font-medium text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td className="p-4 flex items-center gap-3 whitespace-normal">
                              <img
                                src={item.image}
                                alt={item.productName || item.title}
                                className="w-12 h-12 object-contain rounded"
                              />
                              <span className="font-medium">
                                {item.productName || item.title}
                              </span>
                            </td>
                            <td className="p-4">{item.quantity}</td>
                            <td className="p-4">
                              ${(item.newPrice ?? item.price).toFixed(2)}
                            </td>
                            <td className="p-4">
                              $
                              {(
                                (item.newPrice ?? item.price) * item.quantity
                              ).toFixed(2)}
                            </td>
                            <td className="p-4">
                              <span className="inline-block px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded">
                                Pending
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card Style */}
                  <div className="sm:hidden border rounded-lg divide-y divide-gray-200 shadow-sm overflow-hidden">
                    {cartItems.map((item, index) => (
                      <div key={index} className="p-4 flex flex-col gap-3 bg-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.productName || item.title}
                              className="w-16 h-16 object-contain rounded"
                            />
                            <div>
                              <h4 className="font-semibold">
                                {item.productName || item.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                ${(item.newPrice ?? item.price).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Quantity</span>
                          <span className="font-medium">{item.quantity}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Subtotal</span>
                          <span className="font-semibold">
                            $
                            {(
                              (item.newPrice ?? item.price) * item.quantity
                            ).toFixed(2)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Status</span>
                          <span className="inline-block px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded">
                            Pending
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Offers Tab */}
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