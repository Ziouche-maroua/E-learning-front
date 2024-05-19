import { FormControl, FormLabel, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { axiosGet } from "./services/axiosUtils";
import axios from "axios";
import Cookies from "js-cookie";

function Accountinfo() {
  // Déclarez des états locaux pour stocker les informations récupérées du backend
  const [user, setStudents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user information from the backend
    const fetchStudentInfo = async () => {
      try {
        // Send HTTP GET request to the backend to retrieve user information
        const studentData = await axios.get(
          "http://localhost:3001/api/student/info",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`, // Replace with your actual token
              "Content-Type": "application/json",
              // Add other headers as needed
            },
          }
        );

        // Update the state with the retrieved data
        await setStudents(studentData.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations utilisateur:",
          error
        );
      } finally {
        // Set loading to false after data is fetched or an error occurs
        setLoading(false);
        console.log(user);
      }
    };

    // Call the function to fetch user information when the component mounts
    fetchStudentInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <p>{user ? user?.student?.firstName : "Loading..."}</p>
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <p>{user ? user.lastName : "Loading..."}</p>
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <p>{user ? user.phoneNumber : "Loading..."}</p>
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <p>{user ? user?.student?.user?.email : "Loading..."}</p>
      </FormControl>

      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <p>{user ? user.City : "Loading..."}</p>
      </FormControl>
      <FormControl id="university">
        <FormLabel>University</FormLabel>
        <p>{user ? user.University : "Loading..."}</p>
      </FormControl>
    </Grid>
  );
}

export default Accountinfo;
