'use client';
import { useState, useEffect } from 'react';
function FormB({ onSubmit, age }) {
  const [marvelShow, setMarvelShow] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both age and marvelShow are provided
    if (age && marvelShow) {
      onSubmit({
        formType: 'Form B',
        age: age,
        dcShow: '', // Since this is Form B, DC show is not selected
        marvelShow: marvelShow,
      });
    }
  };

  return (
    <form id='marvel' onSubmit={handleSubmit}>
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select
          value={marvelShow}
          onChange={(e) => setMarvelShow(e.target.value)}
        >
          <option value=''>--Select--</option>
          <option value='WandaVision'>WandaVision</option>
          <option value='The Falcon and the Winter Soldier'>
            The Falcon and the Winter Soldier
          </option>
          <option value='Loki'>Loki</option>
          <option value='What If...?'>What If...?</option>
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
      <button id='submit-marvel' type='submit'>
        Submit
      </button>
    </form>
  );
};
export default FormB;