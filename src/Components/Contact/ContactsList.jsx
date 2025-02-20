// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import {Paper, Box} from '@mui/material/Paper';
// import { TableContainer } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';


// export default function ContactsList() {
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







// // import React, { useEffect, useState } from "react";
// // import { fetchContacts, deleteContact } from "../services/api";
// // import ContactCard from "./ContactCard";

// // const ContactList = () => {
// //   const [contacts, setContacts] = useState([]);

// //   useEffect(() => {
// //     fetchContacts().then((response) => setContacts(response.data));
// //   }, []);

// //   const handleDelete = (id) => {
// //     deleteContact(id).then(() => {
// //       setContacts((prev) => prev.filter((contact) => contact.id !== id));
// //     });
// //   };

// //   return (
// //     <div>
// //       {contacts.map((contact) => (
// //         <ContactCard
// //           key={contact.id}
// //           contact={contact}
// //           onDelete={handleDelete}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default ContactList;
