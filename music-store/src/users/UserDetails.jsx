import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const id = useParams().id;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const back=()=>{
    navigate("/list");
  }
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/music/${id}`);
        setUser(response.data.music);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading user details...</div>;
  }
  // const {_id,title,lyrics} = props.music;
  const deleteHandler=async() => {
    await axios.delete(`http://localhost:5000/music/${id}`);
    // console.log('deleted');
    navigate('/list');
 }

 const updateHandler=async() => {
  // await axios
  console.log('update handler');
 }

  return (
    <div className="container mx-auto mt-10">
        <h1 className='text-center text-2xl font-semibold'>Music Details</h1>
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2 flex justify-center">{user.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{user.lyrics}</p>
      </div>
    </div>
    <div className="flex  justify-center mt-4">
          <button
            type="button"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={deleteHandler}
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
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={updateHandler}
          >
            Edit
          </button>
        </div>
  </div>
  );
};

export default UserDetails;
