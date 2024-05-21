import { useEffect, useState } from "react";
// import { axiosGet } from "./services/axiosUtils";
import axios from "axios";
import Cookies from "js-cookie";

function Accountinfo() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };
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
        console.log(user);
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

  return (
    <div className="bg-[#e5f5fa] min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center md:mr-8">
          <div className="relative w-32 h-32 bg-[#dfeaf1] rounded-full overflow-hidden flex items-center justify-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 mt-4">
            <div className="flex justify-between w-full">
              <span className="font-bold pr-4">Evaluation</span>
              <span className="bg-gray-100 rounded p-2 w-24"></span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold pr-4">Bonus</span>
              <span className="bg-gray-100 rounded p-2 w-24"></span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold pr-4">Total</span>
              <span className="bg-gray-100 rounded p-2 w-24"></span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 w-full">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">First Name</label>
              <input
                type="text"
                readOnly={!isEditing}
                className={`w-full bg-gray-100 rounded p-2 ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                value={user?.student?.user.first_name}
              />
            </div>
            <div>
              <label className="block font-semibold">Last Name</label>
              <input
                type="text"
                readOnly={!isEditing}
                className={`w-full bg-gray-100 rounded p-2 ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                value={user?.student?.user.last_name}
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                readOnly={!isEditing}
                className={`w-full bg-gray-100 rounded p-2 ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                value={user?.student?.user.email}
              />
            </div>
            <div>
              <label className="block font-semibold">Matricule</label>
              <input
                type="text"
                readOnly
                className={`w-full bg-gray-100 rounded p-2 ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                value={user?.student?.matricule}
              />
            </div>
            <button
              onClick={handleEditProfile}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
            >
              {isEditing ? "Save Profile" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountinfo;
