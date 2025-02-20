import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import RegistrationSuccess from "./Components/Auth/RegistrationSuccess";
import Login from "./Components/Auth/Login";
// import LoginSuccess from "./Components/Auth/LoginSuccess";
import ContactTable from "./Components/ContactTable";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/loginSuccess" element={<LoginSuccess />} /> */}
        <Route path="/ContactTable" element={<ContactTable />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;







// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Register from "./components/Auth/Register";
// import Login from "./Components/Auth/Login";
// import ContactTable from "./Components/ContactTable";

// function AppLayout() {
//   const location = useLocation();
//   const isAuthenticated = localStorage.getItem("authToken") !== null;

//   const showNavbarAndFooter =
//     !isAuthenticated && !location.pathname.startsWith("/dashboard");

//   return (
//     <>
//       {showNavbarAndFooter && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<ContactTable />} />
//       </Routes>
//       {showNavbarAndFooter && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;

















// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Register from "./components/Auth/Register";
// import RegistrationSuccess from "./Components/Auth/RegistrationSuccess";
// import Login from "./Components/Auth/Login";
// import LoginSuccess from "./Components/Auth/LoginSuccess";
// import ContactTable from "./Components/Contact/ContactsList"; // Table-based layout
// import { useState } from "react";

// function AppLayout() {
//   const location = useLocation();

//   // Check if the current path is for authenticated routes (e.g., contacts page)
//   const isAuthenticatedPage = location.pathname.startsWith("/contacts");

//   return (
//     <>
//       {!isAuthenticatedPage && <Navbar />} {/* Hide Navbar for contacts page */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/loginSuccess" element={<LoginSuccess />} />
//         {/* Contact Table for authenticated users */}
//         <Route path="/contacts" element={<ContactTable />} />
//       </Routes>
//       {!isAuthenticatedPage && <Footer />} {/* Hide Footer for contacts page */}
//     </>
//   );
// }

// function App() {
//   // Placeholder for user authentication state
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;








// // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// // import Navbar from "./Components/NavBar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import Register from "./components/Auth/Register";
// // import RegistrationSuccess from "./Components/Auth/RegistrationSuccess";
// // import Login from "./Components/Auth/Login";
// // import LoginSuccess from "./Components/Auth/LoginSuccess";
// // import ContactDashboard from "./Components/Contact/ContactDashboard";

// // function AppLayout() {
// //   const location = useLocation();

// //   // Check if the current route is for the dashboard
// //   const showNavbar = !location.pathname.startsWith("/dashboard");

// //   console.log("Current Path:", location.pathname, "Show Navbar:", showNavbar);

// //   return (
// //     <>
// //       {showNavbar && <Navbar />}
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/loginSuccess" element={<LoginSuccess />} />

// //         {/* Dashboard Route */}
// //         <Route path="/dashboard/*" element={<ContactDashboard />} />
// //       </Routes>
// //       {showNavbar && <Footer />}
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <AppLayout />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;






// // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// // import Navbar from "./Components/NavBar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import Register from "./components/Auth/Register";
// // import RegistrationSuccess from "./Components/Auth/RegistrationSuccess";
// // import Login from "./Components/Auth/Login";
// // import LoginSuccess from "./Components/Auth/LoginSuccess";
// // import ContactDashboard from "./Components/Contact/ContactDashboard";

// // function AppLayout() {
// //   const location = useLocation();

// //   // Check if the current route is for the dashboard
// //   const showNavbar = !location.pathname.startsWith("/dashboard");

// //   return (
// //     <>
// //       {showNavbar && <Navbar />}
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/loginSuccess" element={<LoginSuccess />} />

// //         {/* Dashboard Route */}
// //         <Route path="/dashboard" element={<ContactDashboard />} />
// //       </Routes>
// //       {showNavbar && <Footer />}
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <AppLayout />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;



// // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// // import Navbar from "./Components/NavBar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import Register from "./components/Auth/Register";
// // import RegistrationSuccess from "./Components/Auth/RegistrationSuccess";
// // import Login from "./Components/Auth/Login";
// // import LoginSuccess from "./Components/Auth/LoginSuccess";
// // import ContactDashboard from "./Components/Contact/ContactDashboard";

// // function AppLayout() {
// //   const location = useLocation();

// //   // Check if the current route is for the dashboard
// //   const showNavbar = !location.pathname.startsWith("/dashboard");

// //   return (
// //     <>
// //       {showNavbar && <Navbar />}
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/loginSuccess" element={<LoginSuccess />} />

// //         {/* Dashboard Route */}
// //         <Route path="/dashboard" element={<ContactDashboard />} />
// //       </Routes>
// //       {showNavbar && <Footer />}
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <AppLayout />
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

