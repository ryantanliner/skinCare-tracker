import React from 'react';

const ShowRoutine = ({ routine, removeProduct }) => {
  return (
    <>
      {routine.map((product) => (
        <div key={product.id} className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2"><strong>Type:</strong> {product.type}</p>
          <p className="mb-2"><strong>Purpose:</strong> {product.purpose}</p>
          <p className="mb-4"><strong>Time:</strong> {product.am === null ? 'Both' : product.am ? 'Morning' : 'Night'}</p>
          <button onClick={() => removeProduct(product.id)} className="px-4 py-2 bg-red-600 rounded">Remove</button>
        </div>
      ))}
    </>
  );
};

export default ShowRoutine;
