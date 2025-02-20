import axiosInstance from "./axiosConfig";

export const getAllContacts = async (page, size) => {
  return await axiosInstance.get(`/contacts?page=${page}&size=${size}`);
};

export const createContact = async (contact) => {
  return await axiosInstance.post("/contact", contact);
};

export const updateContact = async (id, updatedContact) => {
  return await axiosInstance.put(`/contact/${id}`, updatedContact);
};

export const deleteContact = async (id) => {
  return await axiosInstance.delete(`/contact/${id}`);
};

export const getContact = async (id) => {
  return await axiosInstance.get(`/contact/${id}`);
};













// import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api/contacts";

// export const fetchContacts = async () => axios.get(API_BASE_URL);
// export const createContact = async (contact) =>
//   axios.post(API_BASE_URL, contact);
// export const updateContact = async (id, contact) =>
//   axios.put(`${API_BASE_URL}/${id}`, contact);
// export const deleteContact = async (id) =>
//   axios.delete(`${API_BASE_URL}/${id}`);



// import axiosInstance from "../api/axiosConfig";  // Import the configured axios instance

// const API_URL = "http://localhost:8082/api/contacts";  // Update with your backend URL

// // Create Contact
// export const createContact = (contact) => {
//   return axiosInstance.post(API_URL, contact);
// };

// // Get All Contacts
// export const getContacts = () => {
//   return axiosInstance.get(API_URL);
// };

// // Get Contact by ID
// export const getContactById = (id) => {
//   return axiosInstance.get(`${API_URL}/${id}`);
// };

// // Update Contact
// export const updateContact = (id, contact) => {
//   return axiosInstance.put(`${API_URL}/${id}`, contact);
// };

// // Delete Contact
// export const deleteContact = (id) => {
//   return axiosInstance.delete(`${API_URL}/${id}`);
// };














// import React from "react";
// // import Register from "../Components/Auth/Register";

// const Home = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <header
//   className="bg-gray-800 p-4 text-white flex flex-col items-center justify-center"
//   style={{
//     background: "linear-gradient(to right, rgb(125, 108, 108),rgb(4, 25, 34))", // Light blue gradient for the header
//   }}
// >
//   <h1 className="text-4xl font-bold mb-4">BizCaller+</h1>

//   {/* Welcome Message */}
//   <p
//     className="text-lg font-semibold px-4 py-2 rounded-md text-white shadow-md"
//     style={{
//       backgroundColor: "rgba(237, 128, 82, 0.9)", // Yellow background with slight transparency
//     }}
//   >
//     ARE YOU LOOKING FOR A CONTACT MANAGEMENT AND  AUTOMATION TOOL FOR INDIVIDUALS & SMALL BUSINESSES?
//   </p>

//   {/* Call-to-Action Button */}
//   <button
//     className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-md text-lg font-bold shadow-lg hover:scale-105 transition-transform"
//   >
//     <img
//       src="/assets/images/icons8-google-play-24.png" // Replace with the actual path to your Google Play icon
//       alt="Google Play"
//       className="w-6 h-6"
//     />
//     Try BizCaller for Free!
//   </button>
// </header>




      // {/* Why Choose Us Section */}
      // <section
      //   className="py-16"
      //   style={{
      //     background: "linear-gradient(to right,rgb(21, 96, 123), #2980b9)", // Darker gradient to complement the form
      //     color: "#ffffff", // Ensures text is visible on the dark background
      //   }}
      // >
      //   <div className="container mx-auto text-center">
      //     <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      //     <p className="mb-8">
      //       We offer an easy-to-use contact management solution tailored to your needs.
      //     </p>
      //     <div className="flex flex-wrap justify-center gap-8">
      //       <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
      //         <h3 className="text-xl font-bold mb-4">Feature One</h3>
      //         <p>Discover tools that simplify your contact management journey.</p>
      //       </div>
      //       <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
      //         <h3 className="text-xl font-bold mb-4">Feature Two</h3>
      //         <p>Get seamless integration with your favorite productivity tools.</p>
      //       </div>
      //       <div className="bg-black p-8 rounded-md shadow-md max-w-xs">
      //         <h3 className="text-xl font-bold mb-4">Feature Three</h3>
      //         <p>Enjoy a user-friendly interface with quick access to insights.</p>
      //       </div>
      //     </div>
      //   </div>
      // </section>


//       {/* Create Account Section */}
//       <section
//         className="py-16"
//         style={{
//           background: "linear-gradient(to right, #ffecd2, #fcb69f)", // Warm peach gradient
//           color: "#333333", // Dark text for the peach background
//         }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
//           {/* Left Section: Register Form */}
//           <div className="flex-1 bg-gray-800 p-8 rounded-md shadow-md text-white">
//             <h2 className="text-2xl font-bold mb-6">Create A Free Account Today</h2>
//             <form className="flex flex-col">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-md"
//               >
//                 Register
//               </button>
//             </form>
//           </div>

//           {/* Right Section: Image */}
//           <div className="flex-1">
//             <img
//               src="/assets/images/appuser.jpg"
//               alt="Content Image"
//               className="w-full h-[360px] object-cover rounded-md"
//             />
//           </div>
//         </div>
//       </section>



//       {/* Content and Copywriting Section */}
//       <section
//         className="py-16"
//         style={{
//           background: "linear-gradient(to right, #f9f9f9, #e0e0e0)", // Light gray gradient for this section
//         }}
//       >
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-6 text-center">What we Offer</h2>
//           <div className="flex flex-col md:flex-row gap-8">

//             {/* Left Content */}
//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
//               <p>
//                 Our team is here to ensure you have all the help you need, from setup
//                 to day-to-day operations. We're committed to your success.
//               </p>
//             </div>

//             {/* Right Content */}
//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">Powerful Insights</h3>
//               <p>
//                 Gain access to real-time insights and analytics that help you make
//                 informed decisions to manage your contacts efficiently.
//               </p>
//             </div>

//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
//               <p>
//                 Our team is here to ensure you have all the help you need, from setup
//                 to day-to-day operations. We're committed to your success.
//               </p>
//             </div>

            
//           </div>
//           <div className="flex flex-col md:flex-row gap-8">

//             {/* Left Content */}
//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
//               <p>
//                 Our team is here to ensure you have all the help you need, from setup
//                 to day-to-day operations. We're committed to your success.
//               </p>
//             </div>

//             {/* Right Content */}
//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">5. Powerful Insights</h3>
//               <p>
//                 Gain access to real-time insights and analytics that help you make
//                 informed decisions to manage your contacts efficiently.
//               </p>
//             </div>

//             <div className="flex-1 bg-white p-8 rounded-md shadow-md">
//               <h3 className="text-xl font-bold mb-4">Exceptional Support</h3>
//               <p>
//                 Our team is here to ensure you have all the help you need, from setup
//                 to day-to-day operations. We're committed to your success.
//               </p>
//             </div>

//             </div>
//         </div>
//       </section>


//   <section className="bg-gray-50 py-12 px-6 md:flex md:items-center md:justify-between">
//   {/* Left Column: Join Waitlist */}
//   <div className="md:w-1/2 flex flex-col items-start justify-center bg-white p-6 rounded-lg shadow-md">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">
//       Join the MVP Waitlist
//     </h2>
//     <p className="text-gray-600 mb-6">
//       Be the first to experience our Bulk SMS API for managing your contacts and automating communication.
//     </p>
//     <form className="flex flex-col w-full gap-4">
//       <input
//         type="number"
//         placeholder="Enter your whatsapp"
//         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold py-3 px-6 rounded-md shadow-md hover:scale-105 transition-transform"
//       >
//         Join Waitlist
//       </button>
//     </form>
//   </div>

//   {/* Right Column: Content with Slides */}
//   <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-start justify-center md:pl-12">
//     {/* Slide 1 */}
//     <div className="mb-8">
//       <h3 className="text-2xl font-bold text-blue-600 mb-2">
//         Revolutionizing Contact Management
//       </h3>
//       <p className="text-gray-700">
//         Our mission is to empower individuals and small businesses to take control of their communication. 
//         With features like bulk SMS and automated tools, BizCaller ensures seamless management of your business contacts.
//       </p>
//     </div>

//     {/* Slide 2 */}
//     <div>
//       <h3 className="text-2xl font-bold text-orange-500 mb-2">
//         Analytics Dashboard
//       </h3>
//       <p className="text-gray-700">
//         Gain insights into your communication strategy with our real-time analytics dashboard. 
//         Monitor engagement, message delivery, and campaign performance effortlessly.
//       </p>
//     </div>
//   </div>
// </section>


//  {/* Create Account Section */}
//  <section
//         className="py-16"
//         style={{
//           background: "linear-gradient(to right, #ffecd2, #fcb69f)", // Warm peach gradient
//           color: "#333333", // Dark text for the peach background
//         }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">


//           <div className="Testimonial">
//             <h1>
//               TESTIMONIALS
//             </h1>

//             <h2>
//               We Believe FlowUp is the best tool out there. but listen to our Happy clients.
//             </h2>
            
//           </div>
        

//           {/* Right Section: Image */}
//           <div className="flex-1">
//             <img
//               src="/assets/images/appuser.jpg"
//               alt="Content Image"
//               className="w-full h-[360px] object-cover rounded-md"
//             />
//           </div>


//         </div>
//       </section>
  
//     </div>
//   );
// };

// export default Home;