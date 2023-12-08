'use client';
import { useState } from 'react';
function Summary({ formData }) {
  return (
    <div id='summary'>
      <h2>Summary</h2>
      <p>Form Type: {formData.formType}</p>
      <p>Age: {formData.age}</p>
      <p>DC Shows: {formData.dcShow}</p>
      <p>Marvel Shows: {formData.marvelShow}</p>
    </div>
  );
};
export default Summary;