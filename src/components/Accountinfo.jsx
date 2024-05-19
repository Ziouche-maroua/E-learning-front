import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function AccountSettings() {


 // Déclarez des états locaux pour stocker les informations récupérées du backend
 const [student, setStudent] = useState(null);

 useEffect(() => {
   // Fonction pour récupérer les informations de l'utilisateur depuis le backend
   const fetchStudentInfo = async () => {
     try {
       // Envoi de la requête HTTP GET au backend pour récupérer les informations de l'utilisateur
       const response = await axios.get("http://localhost:3001/api/students"); // Utilisez la fonction axiosGet avec le chemin relatif spécifique à votre backend
       const studentData = response.data;
       // Mise à jour de l'état avec les données récupérées
       localStorage.setItem('student', JSON.stringify(studentData));
       setStudent(studentData);
     } catch (error) {
       console.error('Erreur lors de la récupération des informations utilisateur:', error);
     }
   };

   // Vérifier si les informations de l'étudiant sont déjà dans le local storage
   const storedStudent = localStorage.getItem('student');
   if (storedStudent) {
     setStudent(JSON.parse(storedStudent));
   } else {
     // Si non, appeler la fonction pour récupérer les informations de l'utilisateur
     fetchStudentInfo();
   }
 }, []);












  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="first_name">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Tim" />
      </FormControl>
      <FormControl id="last_name">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Cook" />
      </FormControl>
     
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@apple.com"
        />
      </FormControl>


      <FormControl id="matricule">
        <FormLabel>Matricule</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="tcook@apple.com"
        />
      </FormControl>
     
     
    </Grid>
  )
}

export default AccountSettings
