import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useState } from 'react'; 
import { axiosGet } from './services/axiosUtils';


     function Accountinfo() {
  // Déclarez des états locaux pour stocker les informations récupérées du backend
  const [students, setStudents] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les informations de l'utilisateur depuis le backend
    const fetchStudentInfo = async () => {
      try {
        // Envoi de la requête HTTP GET au backend pour récupérer les informations de l'utilisateur
        const studentData = await axios.get("http://localhost:3001/api/students"); // Utilisez la fonction axiosGet avec le chemin relatif spécifique à votre backend
        setStudents(studentData); // Mise à jour de l'état avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur:', error);
      }
    };

    // Appel de la fonction pour récupérer les informations de l'utilisateur lors du montage du composant
    fetchStudentInfo();
  }, []); 

  
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <p>{users ? users.firstName : 'Loading...'}</p>
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <p>{users? users.lastName : 'Loading...'}</p>
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <p>{users ? users.phoneNumber : 'Loading...'}</p>
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <p>{users? users.Emailadress : 'Loading...'}</p>
      </FormControl>
      
      <FormControl id="city">
      <FormLabel>City</FormLabel>
      <p>{users ? users.City : 'Loading...'}</p>
      </FormControl>
      <FormControl id="university">
        <FormLabel>University</FormLabel>
        <p>{users ? users.University : 'Loading...'}</p>
      </FormControl>
    </Grid>
  )
}

export default Accountinfo
