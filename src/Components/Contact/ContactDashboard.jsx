// import React, { useState, useEffect } from "react";
// import { getContacts, createContact, updateContact, deleteContact } from "../services/contactService";

// const ContactDashboard = () => {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });

//   useEffect(() => {
//     // Fetch contacts when component mounts
//     loadContacts();
//   }, []);

//   const loadContacts = async () => {
//     try {
//       const response = await getContacts();
//       setContacts(response.data);
//     } catch (error) {
//       console.error("Error fetching contacts", error);
//     }
//   };

//   const handleCreateContact = async () => {
//     try {
//       await createContact(newContact);
//       loadContacts();  // Reload contacts after creation
//     } catch (error) {
//       console.error("Error creating contact", error);
//     }
//   };

//   const handleUpdateContact = async (id) => {
//     try {
//       const updatedContact = { ...newContact };  // Modify this based on the contact data you want to update
//       await updateContact(id, updatedContact);
//       loadContacts();  // Reload contacts after update
//     } catch (error) {
//       console.error("Error updating contact", error);
//     }
//   };

//   const handleDeleteContact = async (id) => {
//     try {
//       await deleteContact(id);
//       loadContacts();  // Reload contacts after deletion
//     } catch (error) {
//       console.error("Error deleting contact", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Dashboard</h1>
      
//       {/* Form to add new contact */}
//       <div>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newContact.name}
//           onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newContact.email}
//           onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={newContact.phone}
//           onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
//         />
//         <button onClick={handleCreateContact}>Add Contact</button>
//       </div>

//       {/* Display contacts */}
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             <span>{contact.name}</span> | <span>{contact.email}</span> | <span>{contact.phone}</span>
//             <button onClick={() => handleUpdateContact(contact.id)}>Update</button>
//             <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactDashboard;
