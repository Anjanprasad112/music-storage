import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const id = useParams().id;
  const [title,setTitle] = useState("");
  const [lyrics,setLyrics] = useState("");
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
        setTitle(response.data.music.title);
        setLyrics(response.data.music.lyrics);
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
    await axios.delete(`https://music-server-kappa.vercel.app/${id}`);
    // console.log('deleted');
    navigate('/list');
 }

 const updateHandler=async() => {
  await axios.put(`https://music-server-kappa.vercel.app/${id}`,{title : String(title),
  lyrics : String(lyrics)});
  navigate('/list');
 }

  return (
    <div className="container mx-auto mt-10">
        <h1 className='text-center text-2xl font-semibold'>Music Details</h1>
        <h2 className='text-center text-lg font-normal'>Note: you can edit the details by clicking on the details and click on edit button to save</h2>
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">

      <form className="p-4">
        <div className="flex justify-center">
        {/* <p className="mb-2">Title :</p> */}
        <input className="text-3xl font-bold mb-2 flex justify-center text-center w-full" id={title} value={title} type="text" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <textarea className="text-gray-700 text-lg h-full  w-full mb-4 text-center" value={lyrics} id={lyrics} type="textarea" rows="10" cols="40" onChange={(e)=>setLyrics(e.target.value)} />
      </form>
    </div>
    <div className="flex  justify-center mt-4 mb-4">
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
