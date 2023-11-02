import React, { useState } from 'react';
import axios from 'axios';
// useState

const Add = () => {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleCreate = async () => {
    try {
      const response = await axios.post('https://music-server-kappa.vercel.app/music', { 
        title : String(title),
        lyrics : String(lyrics)
       });  
      setTitle('');
      setLyrics('');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  return (
    <div className="font-mono">
    <h2 className="text-3xl font-bold text-center m-2">CREATE</h2>
    <div className="w-full max-w-md h-full mx-auto m-2">
      <div
        className="bg-stone-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Title : 
          </p>
          <input
            type="text"
            value={title}
            id='title'
            onChange={(event) => setTitle( event.target.value )}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Lyrics :
          </p>

          <textarea  name="textarea" rows="10" cols="40" value={lyrics} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setLyrics(e.target.value)} />

          {/* </textarea> */}
         
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Add;