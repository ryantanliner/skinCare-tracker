import React from 'react';

const NewProduct = ({ addProduct, name, handleNameChange, type, handleTypeChange, purpose, handlePurposeChange, am, handleAmChange }) => {
  return (
    <form onSubmit={addProduct} className="space-y-6">
      <input
        value={name}
        onChange={handleNameChange}
        placeholder="Product Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
      <input
        value={type}
        onChange={handleTypeChange}
        placeholder="Product Type"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
      <input
        value={purpose}
        onChange={handlePurposeChange}
        placeholder="Product Purpose"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
      />
      <label className="block">
        Morning/Night/Both
        <select
          value={am}
          onChange={handleAmChange}
          className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-purple-500"
        >
          <option value="Morning">Morning</option>
          <option value="Night">Night</option>
          <option value="Both">Both</option>
        </select>
      </label>
      <button type="submit" className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-700">
        Add Product
      </button>
    </form>
  );
};

export default NewProduct;
