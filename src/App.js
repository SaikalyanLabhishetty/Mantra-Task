import React, { useState } from 'react';
import './App.css'; // Make sure to have a corresponding CSS file


const App = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: '', date: '', description: '' });
  const [selectedDay, setSelectedDay] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({ title: '', date: '', description: '' });
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const getDayOfWeek = (date) => {
    const dayIndex = new Date(date).getDay();
    return DaysOfWeek[dayIndex];
  };
  const DaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value });
    setSelectedDay(getDayOfWeek(e.target.value));
  };


  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='title' required />
        </label>
        <label>
          <input type="date" name="date" value={formData.date} onChange={handleDateChange} required /> <br/>
        </label>
        <label>
          <input type="text" name="description" value={formData.description} onChange={handleChange}  placeholder='description' required />
        </label>
        <button type="submit">Save</button>
      </form>
      <table>
        <thread>
        <div className="days-of-week">
        {DaysOfWeek.map((day, index) => (
          <tr>
             <th key={index} className={selectedDay === day ? 'highlight' : ''}>
            {day}
          </th>
          </tr>
        ))}
      </div>
        </thread>
      </table>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
