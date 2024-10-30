// src/components/ExpenseForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [form, setForm] = useState({
    date: '',
    sum: '',
    category: '',
    comment: '',
  });

  const categories = ['Food', 'Transport', 'Entertainment'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/transactions', {
//         ...form,
//         author: 'User', // Замените на реальное имя автора при необходимости
//       });
//       alert('Expense added successfully!');
//       setForm({ date: '', sum: '', category: '', comment: '' });
//     } catch (error) {
//       console.error('Error adding expense:', error);
//     }
//   };
    const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form:', form);
  
    try {
      const response = await axios.post('http://localhost:3001/transactions', {
        dateTime: form.date, // Проверьте, что формируется корректная дата
        sum: parseFloat(form.sum), // Убедитесь, что сумма передаётся как число
        category: form.category,
        comment: form.comment,
        // author: 'test_user', // Временно указываем автора
      });
  
      console.log('Response:', response.data);
      alert('Expense added successfully!');
      setForm({ date: '', sum: '', category: '', comment: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </label>
      <label>
        Sum:
        <input type="number" name="sum" value={form.sum} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <label>
        Comment:
        <input type="text" name="comment" value={form.comment} onChange={handleChange} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
