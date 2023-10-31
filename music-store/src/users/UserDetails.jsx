import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const back=()=>{
    navigate("/list");
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        // const response = await axios.get(`https://random-data-api.com/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading user details...</div>;
  }
  const { street, suite, city, zipcode } = user.address;
  return (
    <div className="container mx-auto mt-10">
        <h1 className='text-center text-3xl font-semibold'>User Details</h1>
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      {/* <img src={user.avatar} alt="Avatar" className="w-full rounded-t-lg" /> */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{user.full_name}</h1>
        <p className="text-gray-700 text-lg mb-4">{user.title}</p>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-gray-700 font-semibold">ID:</p>
          <p className="text-gray-600">{user.id}</p>
          <p className="text-gray-700 font-semibold mt-2">Email:</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-700 font-semibold mt-2">Address:</p>
          <p className="text-gray-600">{street}</p>
          <p className="text-gray-600">{suite}</p>
          <p className="text-gray-600">{city}, {zipcode}</p>
        </div>
      </div>
    </div>
    <div className="flex  justify-center">
          <button
            type="button"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
          <button
            type="button"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={back}>
            Back
          </button>
          <button
            type="button"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        </div>
  </div>
  );
};

export default UserDetails;
