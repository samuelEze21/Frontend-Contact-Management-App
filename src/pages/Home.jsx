import React, { useState } from "react";
import axios from 'axios';

const Home = () => {

  // State for modal visibility and registration form state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);


  // Handle form input changes for registration
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form input changes for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle registration form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Make API call to register the user
      const response = await axios.post("http://localhost:8082/register", formData);
      console.log(response.data); // Handle success response

      // Redirect to registration success page
      window.location.href = "/registrationSuccess";
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make API call to login the user
      const response = await axios.post("http://localhost:8082/auth", loginData);
      console.log(response.data); // Handle success response
      // Redirect to dashboard or another page after login
      window.location.href = "/LoginSuccess";
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header
        className="bg-gray-800 p-4 text-white flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(to right, rgb(125, 108, 108),rgb(4, 25, 34))",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">BizCaller+</h1>

        {/* Welcome Message */}
        <p
          className="text-lg font-semibold px-4 py-2 rounded-md text-white shadow-md"
          style={{
            backgroundColor: "rgba(237, 128, 82, 0.9)",
          }}
        >
          ARE YOU LOOKING FOR A CONTACT MANAGEMENT AND AUTOMATION TOOL FOR INDIVIDUALS & SMALL BUSINESSES?
        </p>

        {/* Call-to-Action Button */}
        <button
          className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-md text-lg font-bold shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src="/assets/images/icons8-google-play-24.png" // Replace with the actual path to your Google Play icon
            alt="Google Play"
            className="w-6 h-6"
          />
          Try BizCaller for Free!
        </button>
      </header>

        
      {/* Why Choose Us Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(to right,rgb(21, 96, 123), #2980b9)", // Darker gradient to complement the form
          color: "#ffffff", // Ensures text is visible on the dark background
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="mb-8">
            We offer an easy-to-use contact management solution tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
              <h3 className="text-xl font-bold mb-4">Feature One</h3>
              <p>Discover tools that simplify your contact management journey.</p>
            </div>
            <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
              <h3 className="text-xl font-bold mb-4">Feature Two</h3>
              <p>Get seamless integration with your favorite productivity tools.</p>
            </div>
            <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
              <h3 className="text-xl font-bold mb-4">Feature Three</h3>
              <p>Enjoy a user-friendly interface with quick access to insights.</p>
            </div>
          </div>
        </div>
      </section>

    


     {/* Login/ Create Account Section */}
     <section
        className="py-16"
        style={{
          background: "linear-gradient(to right, #ffecd2, #fcb69f)",
          color: "#333333",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Section: Login Form */}
          <div className="flex-1 bg-gray-800 p-8 rounded-md shadow-md text-white">
            <h2 className="text-2xl font-bold mb-6">Enjoy Seamless Contact Management Solution Today!</h2>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <form className="flex flex-col" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login to Dashboard'}
              </button>
            </form>

            <p className="mt-4 text-center text-white">
              Not Registered yet? <br />
              <a
                href="#register"
                className="text-blue-400 font-bold hover:text-blue-500"
                onClick={toggleModal} 
              >
                Create A Free Account
              </a>
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1">
            <img
              src="/assets/images/appuser.jpg"
              alt="Content Image"
              className="w-full h-[360px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Modal for Registration */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-8 rounded-md w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Register Your Account</h2>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-100 border-2 rounded-md p-2 mb-4"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-md"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={toggleModal} // Close modal
            >
              &times;
            </button>
          </div>
        </div>
      )}


      {/* Content and Copywriting Section */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(to right, #f9f9f9, #e0e0e0)", 
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What we Offer</h2>
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left Content */}
            <div className="flex-1 bg-white p-8 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
              <p>
                Our team is here to ensure you have all the help you need, from setup
                to day-to-day operations. We're committed to your success.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex-1 bg-white p-8 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Powerful Insights</h3>
              <p>
                With BizCaller, you'll gain access to data-driven insights to enhance your
                business strategy and grow your contact list efficiently.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left Content */}
            <div className="flex-1 bg-white p-8 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
              <p>
                Our team is here to ensure you have all the help you need, from setup
                to day-to-day operations. We're committed to your success.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex-1 bg-white p-8 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-4">Powerful Insights</h3>
              <p>
                With BizCaller, you'll gain access to data-driven insights to enhance your
                business strategy and grow your contact list efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-teal-700 py-12 px-6 md:flex md:items-center md:justify-between">

{/* Left Column: Join Waitlist */}
<div className="md:w-1/2 flex flex-col items-start justify-center bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    Join the MVP Waitlist
  </h2>
  <p className="text-gray-600 mb-6">
    Be the first to Experience our Bulk SMS API for managing your contacts and automating communication.
  </p>
  <form className="flex flex-col w-full gap-4">
    <input
      type="number"
      placeholder="Enter your whatsapp"
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
    <button
      type="submit"
      className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 px-6 rounded-md shadow-md hover:scale-105 transition-transform"
    >
      Join Waitlist
    </button>
  </form>
</div>

{/* Right Column: Content with Slides */}
<div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-start justify-center md:pl-12">
  {/* Slide 1 */}
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-teal-400 mb-2">
      Revolutionizing Contact Management
    </h3>
    <p className="text-gray-200">
      Our mission is to empower individuals and small businesses to take control of their communication. 
      With features like bulk SMS and automated tools, BizCaller ensures seamless management of your business contacts.
    </p>
  </div>

  {/* Slide 2 */}
  <div>
    <h3 className="text-2xl font-bold text-teal-300 mb-2">
      Analytics Dashboard
    </h3>
    <p className="text-gray-200">
      Gain insights into your communication strategy with our real-time analytics dashboard. 
      Monitor engagement, message delivery, and campaign performance effortlessly.
    </p>
  </div>
</div>
</section>

    </div>
  );
};

export default Home;