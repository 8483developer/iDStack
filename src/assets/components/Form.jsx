import React from "react";


const Form = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white px-8 py-6 shadow-lg rounded-md">
          <table className="w-full text-sm font-light">
            <thead>
              <tr className="border-b    border-gray-200">
                {/* Updated here: Added w-full and text-center */}
                <th className="py-3 px-10 font-medium text-center text-gray-900 w-full" colSpan="2">
                  Session Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">User name :</td>
                <td className="py-3 px-6">John Doe</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">Email :</td>
                <td className="py-3 px-6">johndoe123@example.com</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">Date of birth :</td>
                <td className="py-3 px-6">12/04/2005</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">Description :</td>
                <td className="py-3 px-6">Invest in your children's future</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">Mode :</td>
                <td className="py-3 px-6">Online</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">First Date :</td>
                <td className="py-3 px-6">11/9/2024, 8:30:00 AM</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-200">
                <td className="py-3 px-6">Second Date :</td>
                <td className="py-3 px-6">11/10/2024, 4:00:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Form;
