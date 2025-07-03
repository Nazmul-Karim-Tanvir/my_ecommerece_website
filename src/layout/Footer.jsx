import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-[1170px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">

                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Subscribe</li>
                        <li>Get 10% off your first order</li>
                        <li>Dummy Line 3</li>

                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Account</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Save $3 with App New User Only</li>
                        <li>Dummy Line 2</li>

                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
