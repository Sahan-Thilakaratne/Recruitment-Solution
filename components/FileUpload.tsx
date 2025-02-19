'use client';
import React from 'react'
import { useState } from 'react';

export const FileUpload = () => {

    const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:9090/api/resume/uploadResume', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setParsedData(data);
      console.log("Form data: ", data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upload Your Resume</h1>
      <form onSubmit={handleUpload}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload and Parse</button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {parsedData && (
        <div>
          <h2>Parsed Resume Data</h2>
          <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
