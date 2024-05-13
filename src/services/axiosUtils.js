// axiosUtils.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://votre-backend.com/api', // URL de base de votre API
  timeout: 5000, // Délai d'attente pour les requêtes en millisecondes
});

// Fonction utilitaire pour gérer les erreurs de requête Axios
const handleError = (error) => {
  console.error('Erreur de requête Axios:', error);
  throw error; // Lance une exception pour que le code appelant puisse la gérer
};

export const axiosGet = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const axiosPost = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Ajoutez d'autres fonctions utilitaires selon les besoins (put, delete, etc.)
