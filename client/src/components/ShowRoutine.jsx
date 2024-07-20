import React from 'react';

const ShowRoutine = ({ routine, removeProduct }) => {
  return (
    <>
      {routine.map((product) => (
        <div key={product.id} className="bg-gray-800 p-4 rounded">
          <h2 className="text-3xl zain-extrabold mb-2">{product.name}</h2>
          <p className="mb-2 text-2xl zain-regular"><strong>Type:</strong> {product.type}</p>
          <p className="mb-2 text-2xl zain-regular"><strong>Purpose:</strong> {product.purpose}</p>
          <p className="mb-4 text-2xl zain-regular"><strong>Time:</strong> {product.am === null ? 'Both' : product.am ? 'Morning' : 'Night'}</p>
          <button onClick={() => removeProduct(product.id)} className="px-4 py-2 bg-red-600 rounded text-xl zain-bold">Remove</button>
        </div>
      ))}
    </>
  );
};

export default ShowRoutine;
