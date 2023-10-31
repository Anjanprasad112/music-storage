import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/music');
        // const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10');
        setUsers(response.data.music);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);
  console.log(users);
 
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map(user => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
