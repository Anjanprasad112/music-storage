import React, { useState } from 'react'
// useState

const Add = () => {
  const [formData, setFormData] = useState({
    title: '',
    lyrics: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="font-mono">
    <h2 className="text-3xl font-bold text-center m-2">CREATE</h2>
    <div className="w-full max-w-md h-full mx-auto m-2">
      <form
        onSubmit={handleSubmit}
        className="bg-stone-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Title : 
          </p>
          <input
            type="text"
            value={formData.title}
            id='title'
            onChange={(event) => setFormData({ ...formData, title: event.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Lyrics :
          </p>

          <textarea name="textarea" rows="10" cols="40" value={formData.lyrics} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFormData({...formData,lyrics:e.target.value})}></textarea>
         
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="mx-auto bg-neutral-700 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Add;