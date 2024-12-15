import React, { useState } from 'react';

export default function ResourceTrading() {
  const [resource, setResource] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTrade = () => {
    alert(`Trading ${quantity} units of ${resource}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Resource Trading</h1>
      <label>Resource: </label>
      <input
        type="text"
        value={resource}
        onChange={(e) => setResource(e.target.value)}
        placeholder="e.g., Food, Water"
      />
      <br />
      <label>Quantity: </label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <br />
      <button onClick={handleTrade}>Submit Trade</button>
    </div>
  );
}
