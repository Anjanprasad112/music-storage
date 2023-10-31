import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('/api/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('/api/items', newItem).then((res) => {
      setItems([...items, res.data]);
      setNewItem({ name: '', description: '' });
    });
  };

  const handleEdit = (id) => {
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    axios.delete(`/api/items/${id}`).then((res) => {
      const updatedItems = items.filter((item) => item._id !== id);
      setItems(updatedItems);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD Application</h1>
      <div>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button onClick={handleSubmit}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => handleEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
