import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../components/Auth/Register"; 
import Login from "../Components/Auth/Login";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => setIsModalOpen(true);
  const closeRegisterModal = () => setIsModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>

          {/* Login Button that opens the modal */}
          <li>
            <button onClick={openLoginModal} className="text-white">
              Login
            </button>
          </li>

          {/* Register Button that opens the modal */}
          <li>
            <button onClick={openRegisterModal} className="text-white">
              Register
            </button>
          </li>
          
        </ul>
      </div>

      {/* Register Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeRegisterModal}
            >
              ✖
            </button>
            {/* Render the Register component inside the modal */}
            <Register closeModal={closeRegisterModal} />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeLoginModal}
            >
              ✖
            </button>
            {/* Render the Login component inside the modal */}
            <Login closeModal={closeLoginModal} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
