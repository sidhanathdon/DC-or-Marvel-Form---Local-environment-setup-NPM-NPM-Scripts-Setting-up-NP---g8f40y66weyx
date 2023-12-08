'use client';
import { useState } from 'react';

function FormA({ onSubmit, age }) {
  const [dcShow, setDcShow] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both age and dcShow are provided
    if (age && dcShow) {
      onSubmit({
        formType: 'Form A',
        age: age,
        dcShow: dcShow,
        marvelShow: '', // Since this is Form A, Marvel show is not selected
      });
    }
  };

  return (
    <form id='dc' onSubmit={handleSubmit}>
      <h2>Form A</h2>
      <label>
        Select DC Shows:
        <select value={dcShow} onChange={(e) => setDcShow(e.target.value)}>
          <option value=''>--Select--</option>
          <option value='The Flash'>The Flash</option>
          <option value='Arrow'>Arrow</option>
          <option value='Supergirl'>Supergirl</option>
          <option value='Legends of Tomorrow'>Legends of Tomorrow</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          disabled
        />
      </label>
      <br />
      <button id='submit-dc' type='submit'>
        Submit
      </button>
    </form>
  );
};
export default FormA;