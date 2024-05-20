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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-md shadow-md">
      <div className="form-control">
        <label className="form-label text-gray-700">First Name</label>
        <p className="text-gray-900">{user ? user?.student?.firstName : "Loading..."}</p>
      </div>
      <div className="form-control">
        <label className="form-label text-gray-700">Last Name</label>
        <p className="text-gray-900">{user ? user.lastName : "Loading..."}</p>
      </div>
      <div className="form-control">
        <label className="form-label text-gray-700">Phone Number</label>
        <p className="text-gray-900">{user ? user.phoneNumber : "Loading..."}</p>
      </div>
      <div className="form-control">
        <label className="form-label text-gray-700">Email Address</label>
        <p className="text-gray-900">{user ? user?.student?.user?.email : "Loading..."}</p>
      </div>
      <div className="form-control">
        <label className="form-label text-gray-700">City</label>
        <p className="text-gray-900">{user ? user.City : "Loading..."}</p>
      </div>
      <div className="form-control">
        <label className="form-label text-gray-700">University</label>
        <p className="text-gray-900">{user ? user.University : "Loading..."}</p>
      </div>
    </div>
  );
}

export default Accountinfo;
