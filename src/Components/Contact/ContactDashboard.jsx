import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  IconButton,
  Box,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Send as SendIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { getContacts, createContact, updateContact, deleteContact, sendBulkSMS } from '../../api/contactService';

const ContactDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSMSDialog, setOpenSMSDialog] = useState(false);
  const [smsMessage, setSmsMessage] = useState('');
  const [editContact, setEditContact] = useState(null);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data);
    } catch (error) {
      showSnackbar('Error loading contacts', 'error');
    }
  };

  const handleCreateContact = async () => {
    try {
      await createContact(newContact);
      loadContacts();
      setOpenDialog(false);
      setNewContact({ name: '', email: '', phone: '' });
      showSnackbar('Contact created successfully');
    } catch (error) {
      showSnackbar('Error creating contact', 'error');
    }
  };

  const handleUpdateContact = async () => {
    try {
      await updateContact(editContact.id, editContact);
      loadContacts();
      setOpenDialog(false);
      setEditContact(null);
      showSnackbar('Contact updated successfully');
    } catch (error) {
      showSnackbar('Error updating contact', 'error');
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      loadContacts();
      showSnackbar('Contact deleted successfully');
    } catch (error) {
      showSnackbar('Error deleting contact', 'error');
    }
  };

  const handleSendBulkSMS = async () => {
    try {
      const selectedContactData = contacts.filter(contact =>
        selectedContacts.includes(contact.id)
      );
      await sendBulkSMS(selectedContactData, smsMessage);
      setOpenSMSDialog(false);
      setSmsMessage('');
      setSelectedContacts([]);
      showSnackbar('Bulk SMS sent successfully');
    } catch (error) {
      showSnackbar('Error sending bulk SMS', 'error');
    }
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={() => {
              setEditContact(params.row);
              setOpenDialog(true);
            }}
            color="primary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteContact(params.row.id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography component="h2" variant="h6" color="primary">
                Contacts
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  onClick={() => {
                    setEditContact(null);
                    setOpenDialog(true);
                  }}
                  sx={{ mr: 1 }}
                >
                  Add Contact
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<SendIcon />}
                  onClick={() => setOpenSMSDialog(true)}
                  disabled={selectedContacts.length === 0}
                >
                  Send Bulk SMS
                </Button>
              </Box>
            </Box>

            <DataGrid
              rows={contacts}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(newSelection) => {
                setSelectedContacts(newSelection);
              }}
              autoHeight
              sx={{ mt: 2 }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          {editContact ? 'Edit Contact' : 'Add New Contact'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={editContact ? editContact.name : newContact.name}
            onChange={(e) =>
              editContact
                ? setEditContact({ ...editContact, name: e.target.value })
                : setNewContact({ ...newContact, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={editContact ? editContact.email : newContact.email}
            onChange={(e) =>
              editContact
                ? setEditContact({ ...editContact, email: e.target.value })
                : setNewContact({ ...newContact, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Phone"
            fullWidth
            value={editContact ? editContact.phone : newContact.phone}
            onChange={(e) =>
              editContact
                ? setEditContact({ ...editContact, phone: e.target.value })
                : setNewContact({ ...newContact, phone: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={editContact ? handleUpdateContact : handleCreateContact}
            variant="contained"
          >
            {editContact ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Bulk SMS Dialog */}
      <Dialog
        open={openSMSDialog}
        onClose={() => setOpenSMSDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Send Bulk SMS</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            Selected Contacts:
          </Typography>
          <Box sx={{ mb: 2 }}>
            {contacts
              .filter((contact) => selectedContacts.includes(contact.id))
              .map((contact) => (
                <Chip
                  key={contact.id}
                  label={`${contact.name} (${contact.phone})`}
                  sx={{ m: 0.5 }}
                />
              ))}
          </Box>
          <TextField
            multiline
            rows={4}
            fullWidth
            label="SMS Message"
            value={smsMessage}
            onChange={(e) => setSmsMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSMSDialog(false)}>Cancel</Button>
          <Button
            onClick={handleSendBulkSMS}
            variant="contained"
            disabled={!smsMessage.trim()}
          >
            Send SMS
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactDashboard;
