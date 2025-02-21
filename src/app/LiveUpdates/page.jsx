import React, { useState } from 'react';

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  const addUpdate = () => {
    if (newUpdate.trim()) {
      setUpdates([{ text: newUpdate, timestamp: new Date().toLocaleString() }, ...updates]);
      setNewUpdate('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Live Updates</h2>
      <div className="flex gap-2 mb-4 max-w-xl mx-auto">
        <input
          type="text"
          value={newUpdate}
          onChange={(e) => setNewUpdate(e.target.value)}
          placeholder="Enter update..."
          className="border p-3 w-full md:w-2/3 rounded-lg text-lg"
        />
        <button
          onClick={addUpdate}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 text-lg"
        >
          Post
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xl mx-auto max-h-[500px] overflow-y-auto">
        {updates.length ? (
          updates.map((update, index) => (
            <div key={index} className="mb-4 p-3 border-b border-gray-200">
              <p className="text-gray-700 text-lg">{update.text}</p>
              <p className="text-sm text-gray-500">{update.timestamp}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No updates available.</p>
        )}
      </div>
    </div>
  );
};

export default LiveUpdates;
