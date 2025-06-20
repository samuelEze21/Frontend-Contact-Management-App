import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082';

export const getContacts = () => {
  return axios.get(`${API_BASE_URL}/contacts`);
};

export const createContact = (contactData) => {
  return axios.post(`${API_BASE_URL}/contacts`, contactData);
};

export const updateContact = (id, contactData) => {
  return axios.put(`${API_BASE_URL}/contacts/${id}`, contactData);
};

export const deleteContact = (id) => {
  return axios.delete(`${API_BASE_URL}/contacts/${id}`);
};

export const sendBulkSMS = async (contacts, message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/send-bulk-sms`, {
      contacts,
      message
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};