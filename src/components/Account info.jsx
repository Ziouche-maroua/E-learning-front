import { FormControl, FormLabel, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { axiosGet } from "./services/axiosUtils";
import axios from "axios";
import Cookies from "js-cookie";

function Accountinfo() {
  // Déclarez des états locaux pour stocker les informations récupérées du backend
  const [users, setStudents] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les informations de l'utilisateur depuis le backend
    const fetchStudentInfo = async () => {
      try {
        // Envoi de la requête HTTP GET au backend pour récupérer les informations de l'utilisateur
        const studentData = await axios.get(
          "http://localhost:3001/api/student/info",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`, // Replace with your actual token
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        ); // Utilisez la fonction axiosGet avec le chemin relatif spécifique à votre backend
        console.log(studentData.data);
        setStudents(studentData); // Mise à jour de l'état avec les données récupérées
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations utilisateur:",
          error
        );
      }
    };

    // Appel de la fonction pour récupérer les informations de l'utilisateur lors du montage du composant
    fetchStudentInfo();
  }, []);

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <p>{users ? users.firstName : "Loading..."}</p>
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <p>{users ? users.lastName : "Loading..."}</p>
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <p>{users ? users.phoneNumber : "Loading..."}</p>
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <p>{users ? users.Emailadress : "Loading..."}</p>
      </FormControl>

      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <p>{users ? users.City : "Loading..."}</p>
      </FormControl>
      <FormControl id="university">
        <FormLabel>University</FormLabel>
        <p>{users ? users.University : "Loading..."}</p>
      </FormControl>
    </Grid>
  );
}

export default Accountinfo;
