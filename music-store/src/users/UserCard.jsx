import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
     <>
    <div className="px-6 py-4">
      <Link to={`/list/${user._id}`}>
        {/* <img src={user.avatar} alt={user.name} /> */}
        <div className="max-w-xs max-h-20  rounded overflow-hidden shadow-lg text-center">
            {/* <div className=" gap-4 border-2 rounded-sm m-2 p-2 ">  */}

          {/* <p className="text-gray-700 text-base font-mono">ID: {user._id}</p> */}
          <p className="font-bold text-xl mb-2 font-mono overflow-hidden">Title: {user.title}</p>
          <p className="font-bold text-xl mb-2 font-mono">Lyrics: {user.lyrics}</p>
            {/* </div> */}
        </div>
      </Link>
    </div>
    </>
 
  );
};

export default UserCard;
