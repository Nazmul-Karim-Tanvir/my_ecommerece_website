import React, { useState } from "react";
import signupImage from "../../assets/images/signupimage/signup-image.png";

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Validation error messages
    const [errors, setErrors] = useState({});

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input change
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};

        // Name is mandatory on signup
        if (!isLogin && !formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        // Email validation mandatory always
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is not valid";
        }

        // Password mandatory always
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Confirm password on signup must match password
        if (!isLogin) {
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = "Please confirm your password";
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }

        setErrors(newErrors);
        // If no errors return true
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        if (isLogin) {
            // Login logic
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

            const user = storedUsers.find(
                (u) => u.email.toLowerCase() === formData.email.toLowerCase()
            );

            if (!user) {
                alert("User not found. Please sign up first.");
                return;
            }

            if (user.password !== formData.password) {
                alert("Incorrect password.");
                return;
            }

            alert(`Welcome back, ${user.name}! You are logged in.`);
            // Clear form after login
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        } else {
            // Signup logic
            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

            const userExists = storedUsers.some(
                (u) => u.email.toLowerCase() === formData.email.toLowerCase()
            );

            if (userExists) {
                alert("User already exists with this email. Please login.");
                return;
            }

            // Save user info
            storedUsers.push({
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            });

            localStorage.setItem("users", JSON.stringify(storedUsers));
            alert("Signup successful! Please login now.");
            setIsLogin(true);
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        }
    };

    // Red star for mandatory fields
    const RedStar = () => <span className="text-red-600">*</span>;

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f1f5f9] to-[#dbeafe]">
            <div className="w-full max-w-[1170px] bg-white/80 backdrop-blur-lg shadow shadow-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row relative transition duration-500">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-52 md:h-auto">
                    <img
                        src={signupImage}
                        alt="Signup"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 md:hidden" />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center bg-white/80 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-center md:text-left text-[#1f2937] mb-6">
                        {isLogin ? "Welcome Back!" : "Get Started"}
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        {!isLogin && (
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Full Name <RedStar />
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Email <RedStar />
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.email
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Password <RedStar />
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.password
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {!isLogin && (
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Confirm Password <RedStar />
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    className={`w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.confirmPassword
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                        }`}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-sm text-blue-600 hover:underline font-medium"
                                    onClick={() => alert("Password reset flow coming soon!")}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#6366f1] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white py-2.5 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setFormData({
                                    name: "",
                                    email: "",
                                    password: "",
                                    confirmPassword: "",
                                });
                                setErrors({});
                            }}
                            className="text-blue-600 hover:underline font-semibold"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;