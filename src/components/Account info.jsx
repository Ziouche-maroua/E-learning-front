import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Accountinfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/student/info",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations utilisateur:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

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
        
        <div className="mt-8 md:mt-0 md:ml-8 w-full lg:w-1/2"> {/* Modifiez cette classe pour agrandir le User Profile */}
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">First Name</label>
              <input
                type="text"
                className={`w-full bg-gray-100 rounded p-2 ${
                  isEditing ? "bg-white focus:outline-none" : "bg-gray-100"
                }`}
                value={user?.student?.user.first_name || ""}
                readOnly={!isEditing}
                onFocus={(e) => e.target.blur()} // Cette ligne empêche le focus sur le champ lorsqu'il est cliqué
              />
            </div>
            <div>
              <label className="block font-semibold">Last Name</label>
              <input
                type="text"
                className={`w-full bg-gray-100 rounded p-2 ${
                  isEditing ? "bg-white focus:outline-none" : "bg-gray-100"
                }`}
                value={user?.student?.user.last_name || ""}
                readOnly={!isEditing}
                onFocus={(e) => e.target.blur()} // Cette ligne empêche le focus sur le champ lorsqu'il est cliqué
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                className={`w-full bg-gray-100 rounded p-2 ${
                  isEditing ? "bg-white focus:outline-none" : "bg-gray-100"
                }`}
                value={user?.student?.user.email || ""}
                readOnly={!isEditing}
                onFocus={(e) => e.target.blur()} // Cette ligne empêche le focus sur le champ lorsqu'il est cliqué
              />
            </div>
            <div>
              <label className="block font-semibold">Matricule</label>
              <input
                type="text"
                className={`w-full bg-gray-100 rounded p-2 ${
                  isEditing ? "bg-white focus:outline-none" : "bg-gray-100"
                }`}
                value={user?.student?.matricule || ""}
                readOnly={!isEditing}
                onFocus={(e) => e.target.blur()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountinfo;
