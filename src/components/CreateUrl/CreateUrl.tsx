import { useState } from 'react';

import './CreateUrl.css';
import { createUrl } from '../../services/createUrlApi';

export function CreateUrl() {
  const [newUrl, setNewUrl] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    setResponseMessage('');
    try {
      const response = await createUrl(newUrl);

      await response.json();
      setNewUrl('');
    } catch (error) {
      console.error(error);
      setResponseMessage('Not able to create URL');
    }
  };

  return (
    <div className="create-url-container">
      <h2>Create New URL</h2>
      <form className="create-url-form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="Enter new URL"
          required
        />
        <button type="submit">Create URL</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
