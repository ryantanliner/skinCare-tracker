import React from 'react';

const ShowRoutine = ({ routine, showAm, setShowAm, removeProduct }) => {
  return (
    <>
      <button
        onClick={() => setShowAm(!showAm)}
        className="bg-teal-500 text-white py-2 px-6 rounded-lg mb-6 hover:bg-teal-700 transition"
      >
        Show {showAm ? 'Night' : 'Morning'} Routine
      </button>
      {routine.map((product) => (
        <li
          key={product.id}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <span className="block font-semibold text-lg text-purple-600">{product.name}</span>
            <span className="block text-gray-700">Type: {product.type}</span>
            <span className="block text-gray-700">Purpose: {product.purpose}</span>
          </div>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </>
  );
};

export default ShowRoutine;
