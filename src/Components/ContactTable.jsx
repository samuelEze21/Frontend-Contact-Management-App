import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';

import { Edit, Delete } from '@mui/icons-material';
import {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} from '../api/ContactService'

export default function ContactTable() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });
  const [editingContact, setEditingContact] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await getAllContacts(0, 10);
      setContacts(response.data);
    } catch (error) {
      setError('Failed to fetch contacts.');
    }
  };

  const handleCreateContact = async () => {
    try {
      await createContact(newContact);
      fetchContacts();
      setNewContact({ name: '', email: '' });
    } catch (error) {
      setError('Failed to create contact.');
    }
  };

  const handleUpdateContact = async (id) => {
    try {
      await updateContact(id, editingContact);
      fetchContacts();
      setEditingContact(null);
    } catch (error) {
      setError('Failed to update contact.');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      fetchContacts();
    } catch (error) {
      setError('Failed to delete contact.');
    }

  };

  const handleGetContact = async(id) => {
    try {
      await getConact(id);
      fetchContacts();
    } catch (error) {
      setError('failed to')
    }
  }

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center">
          Contact Management
        </Typography>

        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            required
          />
          <Button variant="contained" color="primary" onClick={handleCreateContact}>
            Add Contact
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    {editingContact && editingContact.id === contact.id ? (
                      <TextField
                        value={editingContact.name}
                        onChange={(e) =>
                          setEditingContact({ ...editingContact, name: e.target.value })
                        }
                      />
                    ) : (
                      contact.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingContact && editingContact.id === contact.id ? (
                      <TextField
                        value={editingContact.email}
                        onChange={(e) =>
                          setEditingContact({ ...editingContact, email: e.target.value })
                        }
                      />
                    ) : (
                      contact.email
                    )}
                  </TableCell>
                  <TableCell>
                    {editingContact && editingContact.id === contact.id ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateContact(contact.id)}
                      >
                        Save
                      </Button>
                    ) : (
                      <IconButton
                        color="primary"
                        onClick={() => setEditingContact(contact)}
                      >
                        <Edit />
                      </IconButton>
                    )}
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}


// import React, { useEffect, useState } from "react";
// import { getAllContacts, createContact, updateContact, deleteContact } from "../api/ContactService";

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageSize] = useState(10); 
//   const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });
//   const [editingContact, setEditingContact] = useState(null);

//   useEffect(() => {
//     loadContacts();
//   }, [currentPage]);

//   const loadContacts = async () => {
//     setLoading(true);
//     try {
//       const response = await getAllContacts(currentPage, pageSize);
//       setContacts(response.data.content);
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//     setLoading(false);
//   };

//   const handleCreateContact = async () => {
//     try {
//       await createContact(newContact);
//       setNewContact({ name: "", email: "", phone: "" });
//       loadContacts();
//     } catch (error) {
//       console.error("Error creating contact:", error);
//     }
//   };

//   const handleUpdateContact = async () => {
//     try {
//       await updateContact(editingContact.id, editingContact);
//       setEditingContact(null);
//       loadContacts();
//     } catch (error) {
//       console.error("Error updating contact:", error);
//     }
//   };

//   const handleDeleteContact = async (id) => {
//     try {
//       await deleteContact(id);
//       loadContacts();
//     } catch (error) {
//       console.error("Error deleting contact:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-4">
//       <h1 className="text-xl font-bold mb-4">Contact Management</h1>
//       <button
//         onClick={handleCreate}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//       >
//         Create Contact
//       </button>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border">ID</th>
//             <th className="px-4 py-2 border">First Name</th>
//             <th className="px-4 py-2 border">Last Name</th>
//             <th className="px-4 py-2 border">Email</th>
//             <th className="px-4 py-2 border">Phone Number</th>
//             <th className="px-4 py-2 border">Address</th>
//             <th className="px-4 py-2 border">Title</th>
//             <th className="px-4 py-2 border">Status</th>
//             <th className="px-4 py-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr key={contact.id}>
//               <td className="px-4 py-2 border">{contact.id}</td>
//               <td className="px-4 py-2 border">{contact.firstName}</td>
//               <td className="px-4 py-2 border">{contact.lastName}</td>
//               <td className="px-4 py-2 border">{contact.email}</td>
//               <td className="px-4 py-2 border">{contact.phoneNumber}</td>
//               <td className="px-4 py-2 border">{contact.address}</td>
//               <td className="px-4 py-2 border">{contact.title}</td>
//               <td className="px-4 py-2 border">{contact.status}</td>
//               <td className="px-4 py-2 border space-x-2">
//                 <button
//                   onClick={() => handleEdit(contact)}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(contact.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContactTable;
































// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import {Paper, Box} from '@mui/material/Paper';
// import { TableContainer } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';


// export default function ContactTable() {
//   function createData(
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   ) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];


//   const [ContactsList, setContactsList] = useState(null)


//   useEffect(() => {
//     axios.get('http://localhost:8082/getAllContacts').then(Response => {
//       setContactsList(Response.data)
//       console.log(Response.data)

//     })
//   }, []); 


//   return (
//     <Box
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     height="50vh"
//   >
//     <TableContainer component={Paper} style ={{width:'70%'}}>
//     <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//       <TableHead>
//         <TableRow>
//           <TableCell>Dessert (100g serving)</TableCell>
//           <TableCell align="right">Calories</TableCell>
//           <TableCell align="right">Fat&nbsp;(g)</TableCell>
//           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//           <TableCell align="right">Protein&nbsp;(g)</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow
//             key={row.name}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             <TableCell component="th" scope="row">
//               {row.name}
//             </TableCell>
//             <TableCell align="right">{row.calories}</TableCell>
//             <TableCell align="right">{row.fat}</TableCell>
//             <TableCell align="right">{row.carbs}</TableCell>
//             <TableCell align="right">{row.protein}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>

//   </Box>

//   )
// }














// import React, { useEffect, useState } from "react";
// import ContactService from "../services/ContactService";

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       const response = await ContactService.getAllContacts(0, 10); // Pagination example
//       setContacts(response.data.content || []);
//     } catch (err) {
//       setError(err.message || "Error fetching contacts.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleDelete = async (id) => {
//     try {
//       await ContactService.deleteContact(id);
//       setContacts(contacts.filter((contact) => contact.id !== id));
//     } catch (err) {
//       alert("Error deleting contact: " + err.message);
//     }
//   };

//   const handleEdit = (contact) => {
//     // Implement navigation or modal logic for editing
//     console.log("Editing contact:", contact);
//   };

//   const handleCreate = () => {
//     // Implement navigation or modal logic for creating a new contact
//     console.log("Creating a new contact");
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   if (loading) return <div>Loading contacts...</div>;
//   if (error) return <div>{error}</div>;






// import React, { useEffect, useState } from "react";
// import { getContacts, createContact, updateContact, deleteContact } from "../api/ContactService";

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageSize] = useState(10); // Default page size
//   const [newContact, setNewContact] = useState({ name: "", email: "", phone: "" });
//   const [editingContact, setEditingContact] = useState(null);

//   useEffect(() => {
//     loadContacts();
//   }, [currentPage]);

//   const loadContacts = async () => {
//     setLoading(true);
//     try {
//       const response = await getContacts(currentPage, pageSize);
//       setContacts(response.data.content); // Assuming the API returns `content` for the list
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//     setLoading(false);
//   };

//   const handleCreateContact = async () => {
//     try {
//       await createContact(newContact);
//       setNewContact({ name: "", email: "", phone: "" });
//       loadContacts();
//     } catch (error) {
//       console.error("Error creating contact:", error);
//     }
//   };

//   const handleUpdateContact = async () => {
//     try {
//       await updateContact(editingContact.id, editingContact);
//       setEditingContact(null);
//       loadContacts();
//     } catch (error) {
//       console.error("Error updating contact:", error);
//     }
//   };

//   const handleDeleteContact = async (id) => {
//     try {
//       await deleteContact(id);
//       loadContacts();
//     } catch (error) {
//       console.error("Error deleting contact:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Contact Management</h2>

//       {/* Create Contact Form */}
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Add New Contact</h3>
//         <div className="grid grid-cols-3 gap-2">
//           <input
//             type="text"
//             placeholder="Name"
//             value={newContact.name}
//             onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
//             className="border p-2 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={newContact.email}
//             onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={newContact.phone}
//             onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
//             className="border p-2 rounded"
//           />
//           <button
//             onClick={handleCreateContact}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Add Contact
//           </button>
//         </div>
//       </div>

//       {/* Contacts Table */}
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan="5" className="text-center p-4">
//                 Loading...
//               </td>
//             </tr>
//           ) : (
//             contacts.map((contact) => (
//               <tr key={contact.id} className="text-center">
//                 <td className="border p-2">{contact.id}</td>
//                 <td className="border p-2">{contact.name}</td>
//                 <td className="border p-2">{contact.email}</td>
//                 <td className="border p-2">{contact.phone}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => setEditingContact(contact)}
//                     className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteContact(contact.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="mt-4 flex justify-center">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
//           disabled={currentPage === 0}
//           className="bg-gray-300 px-4 py-2 rounded mx-2"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className="bg-gray-300 px-4 py-2 rounded mx-2"
//         >
//           Next
//         </button>
//       </div>

//       {/* Edit Contact Modal */}
//       {editingContact && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">Edit Contact</h3>
//             <div className="grid grid-cols-3 gap-2 mb-4">
//               <input
//                 type="text"
//                 value={editingContact.name}
//                 onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="email"
//                 value={editingContact.email}
//                 onChange={(e) => setEditingContact({ ...editingContact, email: e.target.value })}
//                 className="border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 value={editingContact.phone}
//                 onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
//                 className="border p-2 rounded"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleUpdateContact}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setEditingContact(null)}
//                 className="bg-gray-300 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactTable;
